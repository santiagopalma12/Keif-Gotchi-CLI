import { simpleGit, SimpleGit } from 'simple-git';

const git: SimpleGit = simpleGit();

export interface GitStatus {
    modified: number;
    untracked: number;
    clean: boolean;
}

export const getGitStatus = async (): Promise<GitStatus> => {
    try {
        const status = await git.status();
        return {
            modified: status.modified.length,
            untracked: status.not_added.length,
            clean: status.isClean()
        };
    } catch (error) {
        // Not a git repo or other error
        return { modified: 0, untracked: 0, clean: true };
    }
};

export const getLastCommitStats = async () => {
    try {
        const log = await git.log({ n: 1 });
        if (log.latest) {
            try {
                // Try diff against parent
                const diff = await git.diffSummary(['HEAD^', 'HEAD']);
                return {
                    hash: log.latest.hash,
                    message: log.latest.message,
                    files: diff.files.length,
                    insertions: diff.insertions,
                    deletions: diff.deletions
                };
            } catch (e) {
                // Likely initial commit (no HEAD^), use show --stat
                const show = await git.show([log.latest.hash, '--stat']);
                // Parse show output roughly or just return basic info
                // simple-git show returns string. 
                // Let's just assume some defaults or try to parse if critical.
                // For game purpose, we can just count files in the tree for initial commit?
                // Or just return 1 file 1 insertion to be safe.
                // Better: use git diff-tree
                const diffTree = await git.raw(['diff-tree', '--no-commit-id', '--name-only', '-r', log.latest.hash]);
                const files = diffTree.split('\n').filter(Boolean).length;
                return {
                    hash: log.latest.hash,
                    message: log.latest.message,
                    files: files,
                    insertions: files * 10, // Estimate
                    deletions: 0
                };
            }
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const isGitRepo = async (): Promise<boolean> => {
    try {
        return await git.checkIsRepo();
    } catch {
        return false;
    }
};
