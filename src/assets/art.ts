// Pixel Art using Block Characters
// █ ▀ ▄ ▌ ▐ ░ ▒ ▓

// Base Calamar Art from user's calamar.txt
// Lines 15 and 16 are the eyes.

const BASE_CALAMAR = [
  `                                        `,
  `                                        `,
  `                                        `,
  `                                        `,
  `                  ████                  `,
  `             ████      ███              `,
  `            ██ ██      ██ ██            `,
  `          ██           ██   █           `,
  `          ██ ██          █  █           `,
  `          █████          ████           `,
  `             ██          █              `,
  `             ██          █              `,
  `             ██          █              `,
  `             ██          █              `,
  `            ██   █    █  █              `, // Line 15 (Index 14)
  `            ██   █    █   ██            `, // Line 16 (Index 15)
  `             ████      ███              `,
  `            ████████████████            `,
  `          █████████████████████         `,
  `    ████████████████████████████████    `,
  `    ████████████████████████ ███████    `,
  `      ███ █████  ████████████   ██      `,
  `       ███████ ██████████ ██████        `,
  `       █████   █████  ███   ███         `,
  `         █     █████  ████              `,
  `               ███     ███              `,
  `                                        `,
  `                                        `,
  `                                        `,
  `                                        `
];

// Helper to modify specific lines
const modifyArt = (base: string[], lineModifications: Record<number, string>) => {
  const newArt = [...base];
  for (const [line, content] of Object.entries(lineModifications)) {
    newArt[parseInt(line)] = content;
  }
  return newArt;
};

// Helper to bob the art up or down
const bob = (base: string[], offset: number) => {
  const newArt = [...base];
  if (offset > 0) {
    // Bob Down: Add empty lines at top, remove from bottom
    for (let i = 0; i < offset; i++) {
      newArt.unshift(`                                        `);
      newArt.pop();
    }
  } else if (offset < 0) {
    // Bob Up: Remove from top, add to bottom
    for (let i = 0; i < Math.abs(offset); i++) {
      newArt.shift();
      newArt.push(`                                        `);
    }
  }
  return newArt.join('\n');
};

// Animation Frames Generator
const createFrames = (base: string[], modifications: Record<number, string> = {}) => {
  const modifiedBase = modifyArt(base, modifications);

  // Frame 0: Base
  const f0 = bob(modifiedBase, 0);

  // Frame 1: Bob Up
  const f1 = bob(modifiedBase, -1);

  // Frame 2: Base (Blink)
  // Blink logic: Close eyes. We'll replace the eye lines with "closed" versions.
  // Original Line 15: `            ██   █    █  █              `
  // Original Line 16: `            ██   █    █   ██            `
  const blinkModifications = {
    14: `            ██   ▄    ▄  █              `,
    15: `            ██   ▀    ▀   ██            `
  };

  // Apply blink modifications to the ALREADY modified base (so we keep glasses etc if possible, 
  // but here we are just overwriting for the blink effect. 
  // If we wanted to keep glasses, we'd need to know where the eyes are relative to glasses.
  // For now, a simple blink that might overwrite glasses for a split second is acceptable or we just overwrite.
  const blinkFrame = modifyArt(modifiedBase, blinkModifications);
  const f2 = bob(blinkFrame, 0);

  // Frame 3: Bob Down
  const f3 = bob(modifiedBase, 1);

  return [f0, f1, f2, f3];
};

export const ART: Record<string, string[]> = {
  EGG: [
    `
           ▄▄▄▄▄▄▄
        ▄███████████▄
      ▄███████████████▄
     ▐█████████████████▌
     ███████████████████
     ███████████████████
     ▐█████████████████▌
      ▀███████████████▀
        ▀███████████▀
           ▀▀▀▀▀▀▀
    `,
    `
           ▄▄▄▄▄▄▄
        ▄███████████▄
      ▄████░░░░░░░████▄
     ▐████░░░░░░░░░████▌
     █████░░░░░░░░░█████
     █████░░░░░░░░░█████
     ▐████░░░░░░░░░████▌
      ▀███████████████▀
        ▀███████████▀
           ▀▀▀▀▀▀▀
    `,
    `
           ▄▄▄▄▄▄▄
        ▄███████████▄
      ▄███████████████▄
     ▐█████████████████▌
     ███████████████████
     ███████████████████
     ▐█████████████████▌
      ▀███████████████▀
        ▀███████████▀
           ▀▀▀▀▀▀▀
    `,
    `
           ▄▄▄▄▄▄▄
        ▄███████████▄
      ▄████░░░░░░░████▄
     ▐████░░░░░░░░░████▌
     █████░░░░░░░░░█████
     █████░░░░░░░░░█████
     ▐████░░░░░░░░░████▌
      ▀███████████████▀
        ▀███████████▀
           ▀▀▀▀▀▀▀
    `
  ],
  BABY: createFrames(BASE_CALAMAR),
  ARCHITECT: createFrames(BASE_CALAMAR, {
    14: `            ██ ▄▀  ▀▄ █              `, // Glasses Top
    15: `            ██ ▀    ▀  ██            `  // Glasses Bottom
  }),
  HACKER: createFrames(BASE_CALAMAR, {
    14: `            ██ █▄▄▄▄█ █              `, // Mask
    15: `            ██ ▀▀▀▀▀▀  ██            `
  }),
  CHAOS: createFrames(BASE_CALAMAR, {
    14: `            ██  ✖  ✖  █              `, // Chaos Eyes
    15: `            ██   ww    ██            `
  }),
  SCARED: createFrames(BASE_CALAMAR, {
    14: `            ██  O  O  █              `, // Scared Eyes
    15: `            ██   O     ██            `
  })
};
