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

const PhoneHeader = () => (
    <Box justifyContent="space-between" paddingX={2} borderStyle="single" borderBottom={false} borderColor="gray">
        <Text color="gray">12:00 PM</Text>
        <Text color="gray">KeifOS v1.0</Text>
        <Text color="green">🔋 100%</Text>
    </Box>
);

const Dashboard: React.FC<DashboardProps> = ({ state, message, scared }) => {
    const mood = state.health < 50 || state.hunger > 80 ? 'sad' : 'happy';

    return (
        <Box flexDirection="column" alignItems="center">
            {/* Phone Container */}
            <Box
                flexDirection="column"
                borderStyle="double"
                borderColor="magenta"
                width={50}
                padding={0}
            >
                <PhoneHeader />

                <Box flexDirection="column" padding={2} alignItems="center">
                    {/* Avatar Section - No Border */}
                    <Box
                        padding={1}
                        marginBottom={1}
                    >
                        <Avatar stage={state.stage} mood={mood} scared={scared} />
                    </Box>

                    {/* Stats Section */}
                    <Stats
                        health={state.health}
                        hunger={state.hunger}
                        xp={state.xp}
                        level={state.level}
                        name={state.name}
                    />

                    {/* Message Notification */}
                    {message && (
                        <Box
                            marginTop={1}
                            borderStyle="single"
                            borderColor="yellow"
                            paddingX={1}
                            width="100%"
                            justifyContent="center"
                        >
                            <Text italic color="yellow">"{message}"</Text>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
