import config from '../config.js';
export const getState = () => {
    return config.store;
};
export const updateState = (updates) => {
    for (const [key, value] of Object.entries(updates)) {
        // @ts-ignore
        config.set(key, value);
    }
    return config.store;
};
export const resetState = () => {
    config.clear();
    return config.store;
};
export const getField = (key) => {
    return config.get(key);
};
export const setField = (key, value) => {
    config.set(key, value);
};
