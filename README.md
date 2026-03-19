# 🔍 Dev Inspect

A sleek command-line tool to inspect any GitHub user's recent activity — right from your terminal.

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue)
![GitHub API](https://img.shields.io/badge/API-GitHub%20Events-181717?logo=github&logoColor=white)

---

## ✨ Features

- **Fetch recent GitHub activity** for any public user
- **Filter by event type** — pushes, pull requests, issues, stars, and more
- **Limit results** to see only what you need
- **Human-readable output** with formatted event descriptions
- **Graceful error handling** for missing users or API failures

---

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

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

---

## 🚀 Usage

### Basic Command

```bash
dev-inspect stats --username <github-username>
```

### Options

| Option                  | Description                        | Default |
| ----------------------- | ---------------------------------- | ------- |
| `--username <username>` | **(Required)** GitHub username      | —       |
| `--limit <number>`      | Number of events to display        | `5`     |
| `--type <type>`         | Filter by event type (see below)   | —       |

### Supported Event Types

| Filter keyword | GitHub Event       |
| -------------- | ------------------ |
| `push`         | Push events        |
| `create`       | Create events      |
| `watch`        | Star events        |
| `issue`        | Issue events       |
| `pr`           | Pull Request events|

### Examples

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

### Sample Output

```
- Pushed 3 commits to octocat/Hello-World
- Created branch in octocat/Spoon-Knife
- Starred torvalds/linux
- opened a PR in octocat/Hello-World
- opened an issue in octocat/Hello-World
```

---

## 🛠️ Tech Stack

| Technology                                         | Purpose                  |
| -------------------------------------------------- | ------------------------ |
| [Commander.js](https://github.com/tj/commander.js) | CLI argument parsing     |
| [Axios](https://axios-http.com/)                   | HTTP requests            |
| [GitHub Events API](https://docs.github.com/en/rest/activity/events) | Data source |

---

## 📁 Project Structure

```
.
├── index.js          # Main CLI entry point & all logic
├── package.json      # Project metadata & dependencies
├── .gitignore        # Ignored files (node_modules)
└── README.md         # You are here!
```

---

## 📝 License

This project is licensed under the **ISC License**.

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
