# CalcSprint

CalcSprint is a lightweight mental math product with two touchpoints:

- a static website for full-length training at `calcsprint.com`
- a browser extension popup for quick 60-second sprints inside Chrome or Edge

The extension is designed as a small but polished portfolio project: clean MV3 architecture, focused UX, local persistence, and a soft bridge from the popup to the full site.

## Extension Summary

Short description:

> Quick math training in your browser with speed rounds and local high scores.

Alternative store-friendly descriptions:

- Fast mental math practice in a browser popup with local best scores.
- Speed math rounds for quick focus breaks, streaks, and saved progress.
- Train mental arithmetic in 60-second sprints without leaving your tab flow.

## What The Extension Does

- Welcome screen with a calm CTA to the full website
- Difficulty selection for `Easy`, `Medium`, and `Hard`
- One fast MVP mode: `Sprint 60 sec`
- Keyboard-first gameplay with `Enter` submit and autofocus
- Clean task generation tuned for mental math, not worksheet-style overload
- Session stats: correct answers, wrong answers, streak, question count
- Local persistence via `chrome.storage.local`
- Saved best score overall
- Saved best score by difficulty
- Saved best streak overall
- Saved selected difficulty
- Saved lifetime sessions, correct answers, and wrong answers

## Project Structure

```text
.
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.css
│   ├── popup.js
│   └── icons/
│       ├── 16.png
│       ├── 32.png
│       ├── 48.png
│       └── 128.png
├── assets/
├── blog/
├── de/
├── es/
├── ru/
├── zh/
├── index.html
└── README.md
```

## Browser Extension Tech

- Manifest V3
- Plain HTML, CSS, and JavaScript
- No build step
- No backend
- No external runtime dependencies
- Local-only data storage through `chrome.storage.local`

## Install In Chrome Or Edge

1. Clone or download this repository.
2. Open `chrome://extensions/` in Chrome or `edge://extensions/` in Edge.
3. Enable `Developer mode`.
4. Click `Load unpacked`.
5. Select the [`extension`](/Users/ivanlukichev/Documents/Codex/CalcSprint/extension) folder.
6. Pin `CalcSprint` if you want one-click access from the toolbar.

After installation, click the extension icon to open the popup trainer.

## Local Development

The extension does not need a build step.

- Extension workflow: edit files in [`extension`](/Users/ivanlukichev/Documents/Codex/CalcSprint/extension) and click `Reload` on the extensions page.
- Quick UI preview: open [`popup.html`](/Users/ivanlukichev/Documents/Codex/CalcSprint/extension/popup.html) directly in a browser for layout checks.
- Full storage behavior: test inside Chrome or Edge as an unpacked extension, because that is where `chrome.storage.local` is available.

The marketing site in the repo is also static and can be served from the root with any simple static server.

## Extension Architecture

The popup logic is intentionally split into small responsibilities inside [`popup.js`](/Users/ivanlukichev/Documents/Codex/CalcSprint/extension/popup.js):

- app state
- task generation
- game timer
- answer submission
- score persistence
- UI rendering
- website link handling

This keeps the MVP small while making future upgrades easy, including Firefox adaptation, extra modes, theme options, or localization.

## Adapting The Website Link

The website CTA target lives in one place:

- [`popup.js`](/Users/ivanlukichev/Documents/Codex/CalcSprint/extension/popup.js)

Update the `WEBSITE_URL` constant to point the extension at another production site, staging domain, or landing page.

## Existing Site

The root of this repository contains the static website for `calcsprint.com`.

Stack:

- Plain HTML/CSS/JS
- No build step
- Cloudflare Pages-compatible `_redirects` and `_headers`

Cloudflare Pages settings:

- Framework preset: `None`
- Build command: none
- Build output directory: `/`

Domain notes:

- Path redirects and security/cache headers are handled by `_redirects` and `_headers`.
- Redirecting `www.calcsprint.com` to `calcsprint.com` should be configured in Cloudflare with Bulk Redirects after the custom domain is attached.

## Future Enhancements

- Sound toggle
- Light and dark theme switch
- Daily challenge stub
- More detailed lifetime stats
- Extra sprint formats and longer rounds
- Localization layer on top of the existing English UI copy
- Firefox-specific packaging pass
