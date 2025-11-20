import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard.js';
import { getState, updateState } from './lib/state.js';
import { checkHygiene, feed, pet } from './lib/mechanics.js';
import { getGitStatus, getLastCommitStats } from './lib/git.js';
import { getRandomRoast } from './assets/roasts.js';

interface AppProps {
    command: string;
}

const App: React.FC<AppProps> = ({ command }) => {
    const [state, setState] = useState(getState());
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const run = async () => {
            // Hygiene Check on every run
            const gitStatus = await getGitStatus();
            checkHygiene(gitStatus.modified, gitStatus.untracked);

            if (command === 'feed') {
                // Manual feed or hook trigger
                const stats = await getLastCommitStats();
                if (stats) {
                    const result = feed(stats.files, stats.insertions, stats.message);
                    if (result.healthChange < 0) {
                        setMessage(getRandomRoast('indigestion'));
                    } else {
                        setMessage(getRandomRoast('good_job'));
                    }
                } else {
                    setMessage("No recent commits found to eat.");
                }
            } else if (command === 'pet') {
                const msg = pet();
                setMessage(msg);
            } else if (command === 'status') {
                // Just show status, maybe roast if neglected
                if (state.hunger > 50) {
                    setMessage(getRandomRoast('neglect'));
                }
            }

            // Update local state to reflect changes
            setState(getState());
        };

        run();
    }, [command]);

    return <Dashboard state={state} message={message} />;
};

export default App;
