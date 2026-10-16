# Winter Workout PWA

A lightweight, offline-capable Progressive Web App for the Winter Workout program.

## Features
- Today view automatically selects the current day's workout.
- Full Monday–Sunday schedule.
- Final Active Mobility sequence.
- Core A and Core B.
- Optional performance logging for strength work; no exercise check-offs.
- Offline caching with a service worker.
- No frameworks, build tools, server, or database.
- Works with GitHub Pages.

## Publish with GitHub Pages
1. Create a new GitHub repository (for example `winter-workout`).
2. Upload the contents of this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`, then Save.
6. Open the Pages URL GitHub provides.

## Install on iPhone
1. Open the published site in Safari.
2. Tap the Share button.
3. Choose **Add to Home Screen**.
4. Launch Winter Workout from the new Home Screen icon.

After the site has loaded once, the core app files are cached for offline use.

## Local testing
Service workers require HTTP/HTTPS rather than opening `index.html` directly.
From this folder, run:

    python3 -m http.server 8000

Then visit `http://localhost:8000`.

## Updating
Edit `app.js` to change exercises. When changing cached files, increment the cache name in `sw.js` (for example `winter-workout-v2`) so devices pick up the new version.

## Privacy
Performance entries use browser `localStorage` and stay on that browser/device. Clearing Safari website data can remove them.
