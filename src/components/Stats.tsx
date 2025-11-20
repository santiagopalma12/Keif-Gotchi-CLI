import React from 'react';
import { Box, Text } from 'ink';
import Gradient from 'ink-gradient';

interface StatsProps {
    health: number;
    hunger: number;
    xp: number;
    level: number;
    name: string;
}

const ProgressBar = ({ value, max, color }: { value: number; max: number; color: string }) => {
    const width = 20;
    const filled = Math.floor((value / max) * width);
    const empty = width - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);

    return (
        <Box flexDirection="row">
            <Text color={color}>{bar}</Text>
        </Box>
    );
};

const Stats: React.FC<StatsProps> = ({ health, hunger, xp, level, name }) => {
    return (
        <Box flexDirection="column" width={30}>
            <Box marginBottom={1}>
                <Text bold color="cyan"> {name} </Text>
                <Text color="gray"> Lvl {level}</Text>
            </Box>

            <Box flexDirection="column">
                <Box justifyContent="space-between">
                    <Text color="green">Health</Text>
                    <Text>{health}%</Text>
                </Box>
                <ProgressBar value={health} max={100} color="green" />

                <Box justifyContent="space-between" marginTop={1}>
                    <Text color="red">Hunger</Text>
                    <Text>{hunger}%</Text>
                </Box>
                <ProgressBar value={hunger} max={100} color="red" />

                <Box justifyContent="space-between" marginTop={1}>
                    <Text color="yellow">XP</Text>
                    <Text>{Math.floor(xp)}</Text>
                </Box>
                <Text color="yellow">{'█'.repeat(Math.min(20, Math.floor(xp / 50)))}</Text>
            </Box>
        </Box>
    );
};

export default Stats;
