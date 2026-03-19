import axios from "axios";
export async function getGitHubData(username) {
  try {
    const userRes = await axios.get(`https://api.github.com/users/${username}`);
    const repoRes = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10`);
  
    
    return {
      user: userRes.data,
      repos: repoRes.data
    };
  } catch (err) {
    console.log(err.message);
    return null;
  }
}

export function analyzeGitHubData(data) {
  const repos = data.repos;

  const totalRepos = repos.length;

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

  const languageCount = {};
  repos.forEach(repo => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });

  const mostUsedLanguage = Object.keys(languageCount).reduce((a, b) =>
    languageCount[a] > languageCount[b] ? a : b,
    "None"
  );

  const topRepos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3)
    .map(repo => ({
      name: repo.name,
      stars: repo.stargazers_count
    }));

  const weakRepos = repos.filter(repo => !repo.description || repo.description === "");

  return {
    totalRepos,
    totalStars,
    mostUsedLanguage,
    topRepos,
    weakRepoCount: weakRepos.length
  };
}


export function buildPromptData(analysis) {
  return `
Total Repositories: ${analysis.totalRepos}
Total Stars: ${analysis.totalStars}
Most Used Language: ${analysis.mostUsedLanguage}

Top Projects:
${analysis.topRepos.map(r => `${r.name} (${r.stars} stars)`).join("\n")}

Repositories without description: ${analysis.weakRepoCount}
`;
}