# 🔍 Dev Inspect

A sleek command-line tool to inspect any GitHub user's activity, generate AI-powered professional summaries, and get witty roasts — right from your terminal.

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue)
![GitHub API](https://img.shields.io/badge/API-GitHub%20Events-181717?logo=github&logoColor=white)
![Gemini AI](https://img.shields.io/badge/AI-Gemini-8E75B2?logo=google&logoColor=white)

---

## ✨ Features

- **Fetch recent GitHub activity** for any public user
- **Filter by event type** — pushes, pull requests, issues, stars, and more
- **Limit results** to see only what you need
- **AI-powered resume generation** — get a professional recruiter-style summary of any GitHub profile using Gemini AI
- **AI-powered roast** — get witty Bollywood-style roasts based on a GitHub profile
- **Human-readable output** with formatted event descriptions
- **Graceful error handling** for missing users or API failures

---

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- A [Google Gemini API key](https://ai.google.dev/) (required for `resume` and `roast` commands)

### Setup

```bash
# Clone the repository
git clone https://github.com/Yash-Khetan/TMDB_CLI_Tool.git
cd TMDB_CLI_Tool

# Install dependencies
npm install

# Link the CLI globally (optional, for using `dev-inspect` anywhere)
npm link
```

### Environment Variables

Create a `.env` file in the project root with the following:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

> **Note:** The `.env` file is git-ignored. You must create it manually.

---

## 🚀 Usage

### 1. `stats` — Fetch GitHub Activity

```bash
dev-inspect stats --username <github-username>
```

#### Options

| Option                  | Description                        | Default |
| ----------------------- | ---------------------------------- | ------- |
| `--username <username>` | **(Required)** GitHub username      | —       |
| `--limit <number>`      | Number of events to display        | `5`     |
| `--type <type>`         | Filter by event type (see below)   | —       |

#### Supported Event Types

| Filter keyword | GitHub Event       |
| -------------- | ------------------ |
| `push`         | Push events        |
| `create`       | Create events      |
| `watch`        | Star events        |
| `issue`        | Issue events       |
| `pr`           | Pull Request events|

#### Examples

```bash
# Show the 5 most recent events for a user
dev-inspect stats --username octocat

# Show the 10 most recent events
dev-inspect stats --username octocat --limit 10

# Show only push events
dev-inspect stats --username octocat --type push

# Show the last 3 pull request events
dev-inspect stats --username octocat --type pr --limit 3
```

#### Sample Output

```
- Pushed 3 commits to octocat/Hello-World
- Created branch in octocat/Spoon-Knife
- Starred torvalds/linux
- opened a PR in octocat/Hello-World
- opened an issue in octocat/Hello-World
```

---

### 2. `resume` — AI-Powered Professional Summary

Generate a recruiter-friendly professional summary of any GitHub profile using Google Gemini AI.

```bash
dev-inspect resume --username <github-username>
```

#### Sample Output

```
---START---
👤 Profile Summary:
Prolific full-stack developer with a strong focus on JavaScript and Python...

💻 Technical Strengths:
- JavaScript / Node.js
- Python
- Full-stack web development

🚀 Notable Work:
- Open-source CLI tools
- Web application projects

📈 Activity Insight:
Consistent contributor with active repositories...

⚠️ Improvement Areas:
- Add descriptions to repositories
- Increase community engagement
---END---
```

---

### 3. `roast` — AI-Powered Witty Roast

Get a hilarious Bollywood-style roast of any GitHub profile using Google Gemini AI.

```bash
dev-inspect roast --username <github-username>
```

#### Sample Output

```
---START---
🔥 Roast 1: Your commit history is like a Salman Khan movie — lots of action, zero plot.
🔥 Roast 2: You mass push commits like Rohit Shetty blows up cars — quantity over quality.
🔥 Roast 3: Your README files are emptier than a Monday morning theatre show.
🔥 Roast 4: You star repos the way aunties forward Good Morning messages — just for the sake of it.
🔥 Roast 5: Your GitHub is like an election promise — impressive on the surface, nothing inside.
---END---
```

---

## 🛠️ Tech Stack

| Technology                                         | Purpose                              |
| -------------------------------------------------- | ------------------------------------ |
| [Commander.js](https://github.com/tj/commander.js) | CLI argument parsing                 |
| [Axios](https://axios-http.com/)                   | HTTP requests to GitHub API          |
| [Google Gemini AI](https://ai.google.dev/)         | AI-powered resume & roast generation |
| [dotenv](https://github.com/motdotla/dotenv)       | Environment variable management      |
| [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) | Interactive CLI prompts         |
| [GitHub REST API](https://docs.github.com/en/rest) | Data source for user activity & repos |

---

## 📁 Project Structure

```
.
├── index.js          # Main CLI entry point — commands, routing & event formatting
├── caller.js         # GitHub API data fetching & analysis (repos, stars, languages)
├── apicalls.js       # Gemini AI integration — resume & roast prompt generation
├── package.json      # Project metadata & dependencies
├── .env              # Environment variables (API keys — git-ignored)
├── .gitignore        # Ignored files (node_modules, .env)
└── README.md         # You are here!
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👤 Author

**Yash Khetan** — [GitHub](https://github.com/Yash-Khetan)
