import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard.js';
import { getState } from './lib/state.js';
import { checkHygiene, feed, pet, punishForcePush } from './lib/mechanics.js';
import { getGitStatus, getLastCommitStats } from './lib/git.js';
import { getRandomRoast } from './assets/roasts.js';
const App = ({ command }) => {
    const [state, setState] = useState(getState());
    const [message, setMessage] = useState('');
    const [scared, setScared] = useState(false);
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
                    if (result.reaction === 'indigestion') {
                        setMessage(getRandomRoast('indigestion'));
                    }
                    else if (result.reaction === 'boredom') {
                        setMessage(getRandomRoast('boredom'));
                    }
                    else {
                        setMessage(getRandomRoast('good_job'));
                    }
                }
                else {
                    setMessage("No recent commits found to eat.");
                }
            }
            else if (command === 'pet') {
                const msg = pet();
                setMessage(msg);
            }
            else if (command === 'force-push') {
                const msg = punishForcePush();
                setMessage(msg);
                setScared(true);
            }
            else if (command === 'status') {
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
    return _jsx(Dashboard, { state: state, message: message, scared: scared });
};
export default App;
