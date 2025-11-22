import config from './config.js';
import { KeifState } from './types.js';

const args = process.argv.slice(2);
const command = args[0];
const param = args[1];

const run = async () => {
    if (command === 'reset') {
        config.clear();
        console.log('✨ State reset to fresh install (Egg).');
    } else if (command === 'evolve') {
        const target = param?.toUpperCase();
        if (!['ARCHITECT', 'HACKER', 'CHAOS'].includes(target || '')) {
            console.log('Usage: evolve <ARCHITECT|HACKER|CHAOS>');
            return;
        }

        const updates: Partial<KeifState> = {
            xp: 2500,
            level: 10,
            stage: target as any,
            health: 100,
            hunger: 0
        };

        if (target === 'ARCHITECT') {
            updates.stylePoints = { clean: 100, speed: 20, chaos: 0 };
        } else if (target === 'HACKER') {
            updates.stylePoints = { clean: 20, speed: 100, chaos: 10 };
        } else if (target === 'CHAOS') {
            updates.stylePoints = { clean: 0, speed: 50, chaos: 100 };
        }

        for (const [key, value] of Object.entries(updates)) {
            // @ts-ignore
            config.set(key, value);
        }
        console.log(`🧬 Evolved to ${target}!`);
    } else if (command === 'scare') {
        const updates = {
            health: 20,
            stylePoints: { ...config.get('stylePoints'), chaos: config.get('stylePoints').chaos + 50 }
        };
        for (const [key, value] of Object.entries(updates)) {
            // @ts-ignore
            config.set(key, value);
        }
        console.log('😱 Keif is now terrified.');
    } else {
        console.log(`
Usage:
  node --loader ts-node/esm src/demo_utils.ts reset
  node --loader ts-node/esm src/demo_utils.ts evolve <ARCHITECT|HACKER|CHAOS>
  node --loader ts-node/esm src/demo_utils.ts scare
        `);
    }
};

run();
