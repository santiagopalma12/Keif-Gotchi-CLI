#!/usr/bin/env node
import { jsx as _jsx } from "react/jsx-runtime";
import { render } from 'ink';
import meow from 'meow';
import App from './app.js';
import { isGitRepo } from './lib/git.js';
import { installHook } from './lib/hooks.js'; // We need to implement this
const cli = meow(`
	Usage
	  $ keif <command>

	Commands
	  status      Show your Keif-Gotchi
	  feed        Manually feed (or via hook)
      pet         Give love
      init        Install git hooks in current repo
      force-push  Internal: Triggered by force push hook

	Examples
	  $ keif status
	  $ keif feed
`, {
    importMeta: import.meta,
});
const run = async () => {
    const command = cli.input[0] || 'status';
    if (command === 'init') {
        const result = await installHook();
        console.log(result);
        return;
    }
    if (!await isGitRepo()) {
        console.log("Not a git repository. Keif lives in .git!");
        return;
    }
    render(_jsx(App, { command: command }));
};
run();
