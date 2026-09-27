# ⚡ H-clk — No excuses. Only execution.


Focus timer, daily labors, site blocker, strict alarms — enforced by Hercules, Zeus, Poseidon, Baki, and Yujiro.

## Features

- **Focus Timer** — 15/25/45/60/90 min sessions with Lock Mode (no escape)
- **Daily Labors** — 10-task routine checklist, auto-resets at midnight
- **Shield Wall** — Manage a distraction blocklist
- **Strict Alarms** — Set time-based alarms, no snooze
- **9 Enforcers** — Pick your character: Hercules, Zeus, Poseidon, Baki, Yujiro
- **Stats** — Session counter, total focus minutes, day streak tracking
- **Audio + Vibration** — Beep and vibrate on session complete
- **Persistence** — Everything saves to localStorage

## Use as PWA (no build needed)

1. Host `www/index.html` anywhere (GitHub Pages, Netlify, your own server)
2. Open the URL on your phone
3. Tap **Share → Add to Home Screen**
4. Done — launches fullscreen like an app

### GitHub Pages quick setup

```bash
# Create repo on GitHub, then:
git init
git add .
git commit -m "initial"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hercules-app.git
git push -u origin main
```

Then in your repo → **Settings → Pages → Source: Deploy from branch → main → /www → Save**

Your app will be live at `https://YOUR_USERNAME.github.io/hercules-app/`

## Build as Android APK

### Prerequisites

1. **Node.js** (v18+) — https://nodejs.org
2. **Android Studio** — https://developer.android.com/studio
   - During install, make sure to install the **Android SDK**
   - Open Android Studio → SDK Manager → install **Android 14 (API 34)**

### Build steps

```bash
# 1. Clone and install
git clone https://github.com/YOUR_USERNAME/hercules-app.git
cd hercules-app
npm install

# 2. Add Android platform
npx cap add android

# 3. Sync web files to Android
npx cap sync

# 4. Open in Android Studio
npx cap open android
```

### Generate APK in Android Studio

1. Wait for Gradle sync to finish (bottom progress bar)
2. Menu → **Build → Build Bundle(s) / APK(s) → Build APK(s)**
3. Wait for build to complete
4. Click **"locate"** in the notification popup
5. Your APK is at: `android/app/build/outputs/apk/debug/app-debug.apk`

### Install on your phone

1. Transfer the APK to your phone (USB, Google Drive, Telegram, whatever)
2. Tap the APK file
3. Allow "Install from unknown sources" if prompted
4. Done — Hercules is on your phone

## Project structure

```
hercules-app/
├── www/
│   └── index.html          ← the entire app (self-contained)
├── package.json             ← dependencies
├── capacitor.config.ts      ← Android wrapper config
├── .gitignore
└── README.md
```

## Customization

Edit `www/index.html` directly. Everything is in one file:
- **Characters** — `const C=[...]` array, add/remove/reorder
- **Quotes** — `const Q=[...]` array
- **Daily labors** — `const LD=[...]` array, change tasks and times
- **Colors** — CSS `:root` variables at the top
- **Timer durations** — search for `[15,25,45,60,90]`

After editing, run `npx cap sync` and rebuild.

---

*Forged in discipline.*
