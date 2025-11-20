export type EvolutionStage = 'EGG' | 'BABY' | 'ARCHITECT' | 'HACKER' | 'CHAOS';

export interface StylePoints {
    clean: number;
    speed: number;
    chaos: number;
}

export interface KeifState {
    name: string;
    birthDate: string; // ISO Date
    lastInteraction: string; // ISO Date

    // Stats
    health: number; // 0-100
    hunger: number; // 0-100
    xp: number;
    level: number;

    // Evolution
    stage: EvolutionStage;
    stylePoints: StylePoints;

    // Meta
    streak: number;
}

export const INITIAL_STATE: KeifState = {
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
