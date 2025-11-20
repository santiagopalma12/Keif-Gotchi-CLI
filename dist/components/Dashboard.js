import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text } from 'ink';
import Avatar from './Avatar.js';
import Stats from './Stats.js';
const Dashboard = ({ state, message, scared }) => {
    const mood = state.health < 50 || state.hunger > 80 ? 'sad' : 'happy';
    return (_jsxs(Box, { flexDirection: "row", padding: 1, alignItems: "flex-start", children: [_jsx(Box, { borderStyle: "double", borderColor: scared ? 'red' : 'cyan', padding: 2, marginRight: 2, width: 50, height: 30, alignItems: "center", justifyContent: "center", children: _jsx(Avatar, { stage: state.stage, mood: mood, scared: scared }) }), _jsxs(Box, { flexDirection: "column", width: 35, children: [_jsxs(Box, { borderStyle: "single", borderColor: "gray", marginBottom: 1, paddingX: 1, children: [_jsx(Text, { bold: true, color: "magenta", children: "KeifOS v2.0" }), _jsx(Box, { flexGrow: 1 }), _jsx(Text, { color: "green", children: "\uD83D\uDD0B 100%" })] }), _jsx(Box, { borderStyle: "round", borderColor: "white", padding: 1, flexDirection: "column", children: _jsx(Stats, { health: state.health, hunger: state.hunger, xp: state.xp, level: state.level, name: state.name }) }), message && (_jsx(Box, { marginTop: 1, borderStyle: "single", borderColor: "yellow", padding: 1, children: _jsxs(Text, { italic: true, color: "yellow", wrap: "wrap", children: ["\"", message, "\""] }) }))] })] }));
};
export default Dashboard;
