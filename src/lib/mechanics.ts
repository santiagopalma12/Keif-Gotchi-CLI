import { getState, updateState } from './state.js';
import { KeifState, EvolutionStage } from '../types.js';

// Constants
const MAX_HEALTH = 100;
const MAX_HUNGER = 100;

export const calculateLevel = (xp: number): number => {
    return Math.floor(Math.sqrt(xp / 50)) + 1;
};

export const determineStage = (state: KeifState): EvolutionStage => {
    if (state.xp < 500) return 'EGG';
    if (state.xp < 2000) return 'BABY';

    // Evolution Logic
    const { clean, speed, chaos } = state.stylePoints;
    if (clean >= speed && clean >= chaos) return 'ARCHITECT';
    if (speed >= clean && speed >= chaos) return 'HACKER';
    return 'CHAOS';
};

export const feed = (filesChanged: number, insertions: number, message: string) => {
    const state = getState();
    let healthChange = 5;
    let hungerChange = -20;
    let xpChange = 50; // Base XP
    let styleUpdate = { ...state.stylePoints };
    let reaction = 'healthy';

    // 1. Indigestion (Too much code)
    // > 20 files or > 100 insertions
    if (filesChanged > 20 || insertions > 100) {
        healthChange = -10;
        hungerChange = -50; // Stuffed
        xpChange += 100; // High XP for effort, but health penalty
        styleUpdate.chaos += 5;
        reaction = 'indigestion';
    }
    // 2. Boredom (Low quality)
    // Short message or "fix"/"wip"
    else if (message.length < 10 || /fix|wip|temp/i.test(message)) {
        healthChange = 0;
        hungerChange = -5; // Snack
        xpChange = 5; // Low XP
        styleUpdate.chaos += 1;
        reaction = 'boredom';
    }
    // 3. Healthy (Atomic commit)
    else {
        // Bonus for detailed messages
        if (message.length > 30) xpChange += 20;

        // Bonus for clean, small commits
        if (filesChanged < 5) {
            styleUpdate.clean += 3;
            healthChange += 2;
        }

        xpChange += (filesChanged * 2) + (insertions * 0.5);
    }

    // Time based style points
    const hour = new Date().getHours();
    if (hour < 6 || hour > 22) {
        styleUpdate.speed += 2; // Night coding = Hacker
    }

    // Cap XP per commit
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

    return { healthChange, hungerChange, xpChange, newStage, reaction };
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

export const punishForcePush = () => {
    const state = getState();
    const newHealth = Math.max(0, state.health - 20);
    const styleUpdate = { ...state.stylePoints };
    styleUpdate.chaos += 10;

    updateState({
        health: newHealth,
        stylePoints: styleUpdate
    });

    return "Keif is terrified by the Force!";
};
