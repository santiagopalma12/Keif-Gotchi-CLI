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
            setFrame((prev) => (prev + 1) % 4); // Cycle through 4 frames
        }, 250);
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

    // Navy Blue Color (Approximate for terminal: Blue or specific hex)
    // Using a hex code that is bright enough to be seen but "navy" in spirit, or just 'blue' which is standard.
    // User asked for "Azul Marino".
    const navyBlue = '#005faff'; // A nice bright blue/navy. 
    // Or standard 'blue' from ink/chalk might be safer. Let's try a hex.

    return (
        <Box padding={1}>
            <Text color={scared ? 'red' : '#4D4DFF'}>{currentArt}</Text>
        </Box>
    );
};

export default Avatar;
