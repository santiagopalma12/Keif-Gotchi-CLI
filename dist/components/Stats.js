import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text } from 'ink';
const ProgressBar = ({ value, max, color }) => {
    const width = 20;
    const filled = Math.floor((value / max) * width);
    const empty = width - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    return (_jsx(Box, { flexDirection: "row", children: _jsx(Text, { color: color, children: bar }) }));
};
const Stats = ({ health, hunger, xp, level, name }) => {
    return (_jsxs(Box, { flexDirection: "column", width: 30, children: [_jsxs(Box, { marginBottom: 1, children: [_jsxs(Text, { bold: true, color: "cyan", children: [" ", name, " "] }), _jsxs(Text, { color: "gray", children: [" Lvl ", level] })] }), _jsxs(Box, { flexDirection: "column", children: [_jsxs(Box, { justifyContent: "space-between", children: [_jsx(Text, { color: "green", children: "Health" }), _jsxs(Text, { children: [health, "%"] })] }), _jsx(ProgressBar, { value: health, max: 100, color: "green" }), _jsxs(Box, { justifyContent: "space-between", marginTop: 1, children: [_jsx(Text, { color: "red", children: "Hunger" }), _jsxs(Text, { children: [hunger, "%"] })] }), _jsx(ProgressBar, { value: hunger, max: 100, color: "red" }), _jsxs(Box, { justifyContent: "space-between", marginTop: 1, children: [_jsx(Text, { color: "yellow", children: "XP" }), _jsx(Text, { children: Math.floor(xp) })] }), _jsx(Text, { color: "yellow", children: '█'.repeat(Math.min(20, Math.floor(xp / 50))) })] })] }));
};
export default Stats;
