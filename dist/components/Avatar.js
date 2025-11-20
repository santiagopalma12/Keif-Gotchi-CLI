import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Text, Box } from 'ink';
import Gradient from 'ink-gradient';
import { ART } from '../assets/art.js';
const Avatar = ({ stage, mood, scared }) => {
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
    if (mood === 'sad')
        color = 'red';
    if (scared)
        color = 'red';
    if (stage === 'CHAOS')
        color = 'red';
    if (stage === 'HACKER')
        color = 'cyan';
    if (stage === 'ARCHITECT')
        color = 'blue';
    return (_jsx(Box, { padding: 1, children: _jsx(Gradient, { name: color === 'red' ? 'morning' : 'cristal', children: _jsx(Text, { children: currentArt }) }) }));
};
export default Avatar;
