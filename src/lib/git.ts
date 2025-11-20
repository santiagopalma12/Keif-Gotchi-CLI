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
            const show = await git.show([log.latest.hash, '--stat']);
            // Parse stat from show output if needed, or use diffSummary
            // simple-git's log doesn't give file stats directly easily without diff
            // Let's use diffSummary for the latest commit
            const diff = await git.diffSummary(['HEAD^', 'HEAD']);
            return {
                hash: log.latest.hash,
                message: log.latest.message,
                files: diff.files.length,
                insertions: diff.insertions,
                deletions: diff.deletions
            };
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
