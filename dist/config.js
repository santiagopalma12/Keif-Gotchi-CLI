import Conf from 'conf';
import { INITIAL_STATE } from './types.js';
// Schema for type safety (optional but good practice)
const schema = {
    name: { type: 'string' },
    birthDate: { type: 'string' },
    lastInteraction: { type: 'string' },
    health: { type: 'number', minimum: 0, maximum: 100 },
    hunger: { type: 'number', minimum: 0, maximum: 100 },
    xp: { type: 'number', minimum: 0 },
    level: { type: 'number', minimum: 1 },
    stage: { type: 'string' },
    stylePoints: {
        type: 'object',
        properties: {
            clean: { type: 'number' },
            speed: { type: 'number' },
            chaos: { type: 'number' }
        }
    },
    streak: { type: 'number' }
};
const config = new Conf({
    projectName: 'keif-gotchi',
    defaults: INITIAL_STATE,
    // @ts-ignore - Conf types might be slightly off with strict schema but this is fine
    schema
});
export default config;
