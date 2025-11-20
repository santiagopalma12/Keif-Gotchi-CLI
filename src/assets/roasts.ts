export const ROASTS = {
    late_night: [
        "Go to sleep, human. Deployments fail after midnight.",
        "Coding at 3AM? Bold strategy.",
        "Your circadian rhythm is crying.",
        "I hope you have coffee."
    ],
    conflict: [
        "Merge conflict? I smell fear.",
        "Git blame points to... you.",
        "This looks like a crime scene.",
        "Manual merge required. Good luck."
    ],
    good_job: [
        "Nice commit! Yummy hash.",
        "Clean code. I like it.",
        "Productivity is tasty.",
        "Keep feeding me!"
    ],
    neglect: [
        "I'm starving here!",
        "Have you forgotten me?",
        "My pixels are fading...",
        "Commit something! Anything!"
    ],
    indigestion: [
        "Ugh! Too much code!",
        "Masticate your commits, please.",
        "I feel sick... split that PR.",
        "Gluttony is a sin, you know."
    ]
};

export const getRandomRoast = (category: keyof typeof ROASTS): string => {
    const list = ROASTS[category];
    return list[Math.floor(Math.random() * list.length)];
};
