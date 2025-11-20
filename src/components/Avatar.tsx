import React, { useState, useEffect } from 'react';
import { Text, Box } from 'ink';
import Gradient from 'ink-gradient';
import { ART } from '../assets/art.js';
import { EvolutionStage } from '../types.js';

interface AvatarProps {
    stage: EvolutionStage;
    mood: 'happy' | 'sad' | 'neutral';
    scared?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ stage, mood, scared }) => {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setFrame((prev) => (prev + 1) % 2);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // @ts-ignore
    const artFrames = scared ? ART.SCARED : (ART[stage] || ART.EGG);
    const currentArt = artFrames[frame % artFrames.length];

    let color = 'green';
    if (mood === 'sad') color = 'red';
    if (scared) color = 'red';
    if (stage === 'CHAOS') color = 'red';
    if (stage === 'HACKER') color = 'cyan';
    if (stage === 'ARCHITECT') color = 'blue';

    return (
        <Box borderStyle="round" borderColor={color} padding={1}>
            <Gradient name={color === 'red' ? 'morning' : 'cristal'}>
                <Text>{currentArt}</Text>
            </Gradient>
        </Box>
    );
};

export default Avatar;
