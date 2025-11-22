# Keif-Gotchi CLI 🐙

> **"Coding alone is dangerous. Take a Kraken with you."**

**Keif-Gotchi** is the world's first **CLI-based Accountability Partner** that gamifies your Git workflow. It lives in your terminal, feeds on your commits, and judges your coding habits.

Built for the **GitKraken "Dev Passion Project"** competition.

---

## 🚀 Why? (The Problem)
We all have bad habits:
-   "WIP" commit messages.
-   Force pushing to main. 😱
-   Committing once a week with 50 files.

Discipline is hard. **Gamification is fun.**

## 🎮 How it Works
Keif attaches to your Git hooks. He watches every move you make.

### 1. Feed on Code 🍎
Keif gets hungry. He eats your commits.
-   **Healthy Diet**: Small, atomic commits with descriptive messages. (+XP, +Health)
-   **Indigestion**: Massive commits (>20 files). Keif gets sick. (-Health)
-   **Boredom**: "fix", "wip", or 1-word messages. Keif roasts you. (Low XP)

### 2. The "Force Push" Easter Egg 🚨
Try running `git push --force`.
**We dare you.**
(Spoiler: Keif gets SCARED and you lose massive style points. Don't do it.)

### 3. Evolution 🧬
Your coding style shapes Keif's personality:
-   **Architect**: Consistent, clean commits.
-   **Hacker**: High frequency, late-night coding.
-   **Chaos**: Random commit sizes, force pushes.

---

## 📦 Installation

### Option A: Local Install (For Judges/Testing)
Since this is a fresh project, you can run it directly:

```bash
# Clone the repo
git clone https://github.com/santiagopalma12/Keif-Gotchi-CLI.git
cd Keif-Gotchi-CLI

# Install dependencies
npm install

# Link globally (so you can run 'keif' anywhere)
npm link
```

### Option B: NPM (Coming Soon)
```bash
npm install -g keif-gotchi-cli
```

---

## 🕹️ Usage

1.  **Initialize** in any git repo (Keif lives in `.git/hooks`):
    ```bash
    keif init
    ```

2.  **Check Status** (See your Kraken):
    ```bash
    keif status
    ```

3.  **Just Code!**
    Keif runs automatically on `git commit` and `git push`.

---

## 🛠️ Tech Stack
-   **TypeScript**: For type-safe chaos.
-   **Ink (React for CLI)**: To render the 8-bit UI.
-   **Simple-Git**: To analyze your bad habits.
-   **Conf**: To persist Keif's state locally.

---

## 🏆 Competition Criteria Checklist
-   [x] **Technical Originality**: A Tamagotchi that runs on Git Hooks.
-   [x] **Developer Usefulness**: Encourages atomic commits and descriptive messages.
-   [x] **Git Focused**: It's literally all about Git.
-   [x] **Fun**: It roasts you.

---

**License**: ISC
