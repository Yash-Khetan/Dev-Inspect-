#!/usr/bin/env node

import { Command } from "commander";
import axios from "axios";

const program = new Command();

// 🔹 Fetch GitHub activity
async function getDetails(username) {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${username}/events`
    );
    return res.data;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      console.log("User not found");
    } else {
      console.log("Error fetching data");
    }
    return null;
  }
}

// 🔹 Format events (core logic)
function formatEvent(event) {
  switch (event.type) {
    case "PushEvent":
      return `- Pushed ${event.payload.commits?.length || 0 } commits to ${event.repo.name}`;

    case "CreateEvent":
      return `- Created ${event.payload.ref_type} in ${event.repo.name}`;

    case "WatchEvent":
      return `- Starred ${event.repo.name}`;

    case "IssuesEvent":
      return `- ${event.payload.action} an issue in ${event.repo.name}`;

    case "PullRequestEvent":
      return `- ${event.payload.action} a PR in ${event.repo.name}`;

    default:
      return `- Did ${event.type} on ${event.repo.name}`;
  }
}

// 🔹 CLI setup
program
  .name("dev-inspect")
  .description("CLI to inspect GitHub activity")
  .version("1.0");

program
  .command("stats")
  .description("Get GitHub activity")
  .requiredOption("--username <username>", "GitHub username")
  .option("--limit <number>", "Number of events", "5")
  .option("--type <type>", "Filter by event type (push, create, etc.)", "")
  .action(async (options) => {
    const username = options.username;
    const limit = parseInt(options.limit);
    const type = options.type.toLowerCase();

    const data = await getDetails(username);

    if (!data || data.length === 0) {
      console.log("No recent activity found");
      return;
    }

    // 🔹 Filter
    let filtered = data;
    if (type) {
      const typeMap = {
        push: "PushEvent",
        create: "CreateEvent",
        watch: "WatchEvent",
        issue: "IssuesEvent",
        pr: "PullRequestEvent",
      };

      const mappedType = typeMap[type];
      if (mappedType) {
        filtered = data.filter((e) => e.type === mappedType);
      } else {
        console.log("Invalid type filter");
        return;
      }
    }

    // 🔹 Limit
    const limited = filtered.slice(0, limit);

    if (limited.length === 0) {
      console.log("No matching events found");
      return;
    }

    // 🔹 Output
    limited.forEach((event) => {
      console.log(formatEvent(event));
    });
  });

program.parse();