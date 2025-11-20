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
        // Install pre-push hook for force push detection
        const prePushPath = path.join(hookDir, 'pre-push');
        const prePushScript = `#!/bin/sh
# Keif-Gotchi Force Push Detector
while read local_ref local_sha remote_ref remote_sha
do
    if [ "$remote_sha" = "0000000000000000000000000000000000000000" ]; then
        # New branch, ignore
        continue
    fi
    # Check if it's a force push (simplified check, usually pre-push receives args)
    # Actually, pre-push doesn't explicitly say "force", but we can check if it's a non-fast-forward?
    # Or we can just check if the user ran "git push --force" by checking ps? No that's hacky.
    # A better way: The hook receives input. If we are deleting history, it's dangerous.
    # For simplicity in this game, let's just trigger a check.
    # BUT, the user asked for "git push --force" detection.
    # We can check if the command contains --force.
    if ps -o args= $PPID | grep -q -- "--force"; then
        keif force-push
    fi
done
exit 0
`;
        // Windows might not have ps/grep easily in all shells, but Git Bash does.
        // Let's try a simpler approach: Just check if the script is running.
        // Actually, for the sake of the demo, let's make it simple:
        // We will just assume if this hook runs, we check for force flag in the parent process command line if possible,
        // OR we just rely on the user running `keif force-push` manually for the demo if hooks are too complex cross-platform.
        // Wait, the user prompt said: "Implementa un analizador que lea el diff --stat... Si el usuario hace un git push --force..."
        // Let's try to detect it.
        const prePushScriptSimple = `#!/bin/sh
# Check for force push
command_line=$(ps -o args= $PPID)
if echo "$command_line" | grep -q -- "--force"; then
    keif force-push
fi
if echo "$command_line" | grep -q -- "-f"; then
    keif force-push
fi
exit 0
`;
        fs.writeFileSync(prePushPath, prePushScriptSimple, { mode: 0o755 });
        return chalk.green('Successfully installed hooks! Keif is watching.');
    }
    catch (error) {
        return chalk.red(`Failed to install hook: ${error}`);
    }
};
