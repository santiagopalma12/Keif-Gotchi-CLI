export const INITIAL_STATE = {
    name: 'Keif',
    birthDate: new Date().toISOString(),
    lastInteraction: new Date().toISOString(),
    health: 100,
    hunger: 0,
    xp: 0,
    level: 1,
    stage: 'EGG',
    stylePoints: {
        clean: 0,
        speed: 0,
        chaos: 0
    },
    streak: 0
};
