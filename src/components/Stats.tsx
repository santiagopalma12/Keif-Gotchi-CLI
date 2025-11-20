import React from 'react';
import { Box, Text } from 'ink';

interface StatsProps {
    health: number;
    hunger: number;
    xp: number;
    level: number;
    name: string;
}

const ProgressBar = ({ value, max = 100, color = 'green', label }: { value: number, max?: number, color?: string, label: string }) => {
    const width = 20;
    const filled = Math.round((value / max) * width);
    const empty = width - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);

    return (
        <Box flexDirection="row">
            <Box width={10}><Text bold>{label}:</Text></Box>
            <Text color={color}>{bar} {value}/{max}</Text>
        </Box>
    );
};

const Stats: React.FC<StatsProps> = ({ health, hunger, xp, level, name }) => {
    return (
        <Box flexDirection="column" padding={1} borderStyle="single" borderColor="magenta">
            <Text bold underline>{name} (Lvl {level})</Text>
            <Box height={1} />
            <ProgressBar label="Health" value={health} color={health < 30 ? 'red' : 'green'} />
            <ProgressBar label="Hunger" value={hunger} color={hunger > 80 ? 'red' : 'green'} />
            <Box height={1} />
            <Text>XP: {xp}</Text>
        </Box>
    );
};

export default Stats;
