import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text } from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import Avatar from './Avatar.js';
import Stats from './Stats.js';
const Dashboard = ({ state, message }) => {
    const mood = state.health < 50 || state.hunger > 80 ? 'sad' : 'happy';
    return (_jsxs(Box, { flexDirection: "column", padding: 1, children: [_jsx(Gradient, { name: "morning", children: _jsx(BigText, { text: "Keif-Gotchi", font: "tiny" }) }), _jsxs(Box, { flexDirection: "row", children: [_jsx(Avatar, { stage: state.stage, mood: mood }), _jsx(Box, { width: 2 }), _jsx(Stats, { health: state.health, hunger: state.hunger, xp: state.xp, level: state.level, name: state.name })] }), message && (_jsx(Box, { marginTop: 1, borderStyle: "round", borderColor: "yellow", paddingX: 1, children: _jsxs(Text, { italic: true, children: ["\"", message, "\""] }) }))] }));
};
export default Dashboard;
