import { getState, updateState } from './state.js';
import { KeifState, EvolutionStage } from '../types.js';

// Constants
const MAX_HEALTH = 100;
const MAX_HUNGER = 100;
const HUNGER_THRESHOLD = 80; // When hunger is high, health drops

export const calculateLevel = (xp: number): number => {
    return Math.floor(Math.sqrt(xp / 50)) + 1;
    let xpChange = 50 + (filesChanged * 2) + (insertions * 0.5);
    let styleUpdate = { ...state.stylePoints };

    // Analyze Commit
    if (filesChanged > 50) {
        // Indigestion
        healthChange = -10;
        hungerChange = -50;
        xpChange += 50; // Bonus XP for massive work but health penalty
        styleUpdate.chaos += 5;
    } else if (message.toLowerCase().includes('wip') || message.length < 5) {
        // Junk food
        healthChange = -5;
        hungerChange = -10;
        xpChange = 10;
        styleUpdate.chaos += 2;
    } else {
        // Healthy food
        styleUpdate.clean += 3;
    }

    // Time based style points (simple heuristic for now)
    const hour = new Date().getHours();
    if (hour < 6 || hour > 22) {
        styleUpdate.speed += 2; // Night coding = Hacker
    }

    // Cap XP per commit to avoid exploits
    xpChange = Math.min(xpChange, 500);

    const newHealth = Math.min(MAX_HEALTH, Math.max(0, state.health + healthChange));
    const newHunger = Math.min(MAX_HUNGER, Math.max(0, state.hunger + hungerChange));
    const newXP = state.xp + xpChange;
    const newLevel = calculateLevel(newXP);

    const newState = updateState({
        health: newHealth,
        hunger: newHunger,
        xp: newXP,
        level: newLevel,
        stylePoints: styleUpdate,
        lastInteraction: new Date().toISOString()
    });

    // Check evolution after update
    const newStage = determineStage(newState);
    if (newStage !== newState.stage) {
        updateState({ stage: newStage });
    }

    return { healthChange, hungerChange, xpChange, newStage };
};

export const checkHygiene = (modified: number, untracked: number) => {
    const state = getState();
    const now = new Date();
    const lastCheck = new Date(state.lastInteraction);
    const hoursSince = (now.getTime() - lastCheck.getTime()) / (1000 * 60 * 60);

    if (hoursSince < 1) return; // Don't punish too often

    let healthDrop = 0;
    if (untracked > 5) healthDrop += 1 * hoursSince;
    if (modified > 10) healthDrop += 2 * hoursSince;

    // Hunger increases over time
    const hungerIncrease = 2 * hoursSince;

    const newHealth = Math.min(MAX_HEALTH, Math.max(0, state.health - healthDrop));
    const newHunger = Math.min(MAX_HUNGER, Math.max(0, state.hunger + hungerIncrease));

    updateState({
        health: newHealth,
        hunger: newHunger,
        lastInteraction: now.toISOString()
    });
};

export const pet = () => {
    const state = getState();
    const newHealth = Math.min(MAX_HEALTH, state.health + 2);
    updateState({ health: newHealth });
    return "Keif purrs (or bubbles) happily.";
};
