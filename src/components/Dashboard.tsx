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
    scared?: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ state, message, scared }) => {
    const mood = state.health < 50 || state.hunger > 80 ? 'sad' : 'happy';

    return (
        <Box flexDirection="row" padding={1} alignItems="flex-start">
            {/* LEFT PANEL: GIANT AVATAR */}
            <Box
                borderStyle="double"
                borderColor={scared ? 'red' : 'cyan'}
                padding={2}
                marginRight={2}
                width={50}
                height={30}
                alignItems="center"
                justifyContent="center"
            >
                <Avatar stage={state.stage} mood={mood} scared={scared} />
            </Box>

            {/* RIGHT PANEL: STATS & INFO */}
            <Box flexDirection="column" width={35}>
                {/* Header */}
                <Box borderStyle="single" borderColor="gray" marginBottom={1} paddingX={1}>
                    <Text bold color="magenta">KeifOS v2.0</Text>
                    <Box flexGrow={1} />
                    <Text color="green">🔋 100%</Text>
                </Box>

                {/* Stats */}
                <Box borderStyle="round" borderColor="white" padding={1} flexDirection="column">
                    <Stats
                        health={state.health}
                        hunger={state.hunger}
                        xp={state.xp}
                        level={state.level}
                        name={state.name}
                    />
                </Box>

                {/* Message Log */}
                {message && (
                    <Box
                        marginTop={1}
                        borderStyle="single"
                        borderColor="yellow"
                        padding={1}
                    >
                        <Text italic color="yellow" wrap="wrap">"{message}"</Text>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Dashboard;
