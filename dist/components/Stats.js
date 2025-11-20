import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Box, Text } from 'ink';
const ProgressBar = ({ value, max = 100, color = 'green', label }) => {
    const width = 20;
    const filled = Math.round((value / max) * width);
    const empty = width - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    return (_jsxs(Box, { flexDirection: "row", children: [_jsx(Box, { width: 10, children: _jsxs(Text, { bold: true, children: [label, ":"] }) }), _jsxs(Text, { color: color, children: [bar, " ", value, "/", max] })] }));
};
const Stats = ({ health, hunger, xp, level, name }) => {
    return (_jsxs(Box, { flexDirection: "column", padding: 1, borderStyle: "single", borderColor: "magenta", children: [_jsxs(Text, { bold: true, underline: true, children: [name, " (Lvl ", level, ")"] }), _jsx(Box, { height: 1 }), _jsx(ProgressBar, { label: "Health", value: health, color: health < 30 ? 'red' : 'green' }), _jsx(ProgressBar, { label: "Hunger", value: hunger, color: hunger > 80 ? 'red' : 'green' }), _jsx(Box, { height: 1 }), _jsxs(Text, { children: ["XP: ", xp] })] }));
};
export default Stats;
