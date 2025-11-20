import React from 'react';
import { Box, Text } from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import Avatar from './Avatar.js';
import Stats from './Stats.js';
import { KeifState } from '../types.js';

interface DashboardProps {
    state: KeifState;
    message?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ state, message }) => {
    const mood = state.health < 50 || state.hunger > 80 ? 'sad' : 'happy';

    return (
        <Box flexDirection="column" padding={1}>
            <Gradient name="morning">
                <BigText text="Keif-Gotchi" font="tiny" />
            </Gradient>

            <Box flexDirection="row">
                <Avatar stage={state.stage} mood={mood} />
                <Box width={2} />
                <Stats
                    health={state.health}
                    hunger={state.hunger}
                    xp={state.xp}
                    level={state.level}
                    name={state.name}
                />
            </Box>

            {message && (
                <Box marginTop={1} borderStyle="round" borderColor="yellow" paddingX={1}>
                    <Text italic>"{message}"</Text>
                </Box>
            )}
        </Box>
    );
};

export default Dashboard;
