import config from '../config.js';
import { KeifState } from '../types.js';

export const getState = (): KeifState => {
    return config.store;
};

export const updateState = (updates: Partial<KeifState>): KeifState => {
    for (const [key, value] of Object.entries(updates)) {
        // @ts-ignore
        config.set(key, value);
    }
    return config.store;
};

export const resetState = (): KeifState => {
    config.clear();
    return config.store;
};

export const getField = <K extends keyof KeifState>(key: K): KeifState[K] => {
    return config.get(key);
};

export const setField = <K extends keyof KeifState>(key: K, value: KeifState[K]): void => {
    config.set(key, value);
};
