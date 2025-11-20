import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text } from 'ink';
import Avatar from './Avatar.js';
import Stats from './Stats.js';
const PhoneHeader = () => (_jsxs(Box, { justifyContent: "space-between", paddingX: 2, borderStyle: "single", borderBottom: false, borderColor: "gray", children: [_jsx(Text, { color: "gray", children: "12:00 PM" }), _jsx(Text, { color: "gray", children: "KeifOS v1.0" }), _jsx(Text, { color: "green", children: "\uD83D\uDD0B 100%" })] }));
const Dashboard = ({ state, message, scared }) => {
    const mood = state.health < 50 || state.hunger > 80 ? 'sad' : 'happy';
    return (_jsx(Box, { flexDirection: "column", alignItems: "center", children: _jsxs(Box, { flexDirection: "column", borderStyle: "double", borderColor: "magenta", width: 50, padding: 0, children: [_jsx(PhoneHeader, {}), _jsxs(Box, { flexDirection: "column", padding: 2, alignItems: "center", children: [_jsx(Box, { padding: 1, marginBottom: 1, children: _jsx(Avatar, { stage: state.stage, mood: mood, scared: scared }) }), _jsx(Stats, { health: state.health, hunger: state.hunger, xp: state.xp, level: state.level, name: state.name }), message && (_jsx(Box, { marginTop: 1, borderStyle: "single", borderColor: "yellow", paddingX: 1, width: "100%", justifyContent: "center", children: _jsxs(Text, { italic: true, color: "yellow", children: ["\"", message, "\""] }) }))] })] }) }));
};
export default Dashboard;
