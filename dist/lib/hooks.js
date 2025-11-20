import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
export const installHook = async () => {
    const hookDir = path.join(process.cwd(), '.git', 'hooks');
    const hookPath = path.join(hookDir, 'post-commit');
    if (!fs.existsSync(hookDir)) {
        return chalk.red('Error: .git/hooks directory not found. Are you in a git repo?');
    }
    // The command to run. We assume 'keif' is in the path or we use the absolute path to the bin.
    // For a global install, 'keif' works. For local, we might need 'npx keif'.
    // Let's assume the user has installed it globally or linked it.
    const script = `#!/bin/sh
# Keif-Gotchi Hook
keif feed
`;
    try {
        fs.writeFileSync(hookPath, script, { mode: 0o755 });
        return chalk.green('Successfully installed post-commit hook! Keif is watching.');
    }
    catch (error) {
        return chalk.red(`Failed to install hook: ${error}`);
    }
};
