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
  return newArt.join('\n');
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
    `
  ],
  // Baby is now a slightly smaller version or just the base one as requested "cambia el baby tambien"
  // I'll use the base one for Baby too, maybe just without accessories.
  BABY: [
    BASE_CALAMAR.join('\n'),
    BASE_CALAMAR.join('\n') // No animation for now to keep "exact tentacles"
  ],
  ARCHITECT: [
    modifyArt(BASE_CALAMAR, {
      14: `            ██ ▄▀  ▀▄ █              `, // Glasses Top
      15: `            ██ ▀    ▀  ██            `  // Glasses Bottom
    }),
    modifyArt(BASE_CALAMAR, {
      14: `            ██ ▄▀  ▀▄ █              `,
      15: `            ██ ▀    ▀  ██            `
    })
  ],
  HACKER: [
    modifyArt(BASE_CALAMAR, {
      14: `            ██ █▄▄▄▄█ █              `, // Mask
      15: `            ██ ▀▀▀▀▀▀  ██            `
    }),
    modifyArt(BASE_CALAMAR, {
      14: `            ██ █▄▄▄▄█ █              `,
      15: `            ██ ▀▀▀▀▀▀  ██            `
    })
  ],
  CHAOS: [
    modifyArt(BASE_CALAMAR, {
      14: `            ██  ✖  ✖  █              `, // Chaos Eyes
      15: `            ██   ww    ██            `
    }),
    modifyArt(BASE_CALAMAR, {
      14: `            ██  ✖  ✖  █              `,
      15: `            ██   MM    ██            `
    })
  ],
  SCARED: [
    modifyArt(BASE_CALAMAR, {
      14: `            ██  O  O  █              `, // Scared Eyes
      15: `            ██   O     ██            `
    }),
    modifyArt(BASE_CALAMAR, {
      14: `            ██  >  <  █              `,
      15: `            ██   O     ██            `
    })
  ]
};
