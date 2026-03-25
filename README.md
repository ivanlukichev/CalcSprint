# CalcSprint

CalcSprint is a lightweight mental math product built around the website at [calcsprint.com](https://calcsprint.com/).

The main experience lives on the site: quick arithmetic training, multiple difficulty levels, localized pages, and a cleaner full-screen practice flow. Browser extensions are part of the same ecosystem, giving users a compact popup version for short daily sprints.

## Official Links

- Website: [calcsprint.com](https://calcsprint.com/)
- Browser extension page: [calcsprint.com/browser-extension/](https://calcsprint.com/browser-extension/)
- Chrome Web Store: [CalcSprint extension](https://chromewebstore.google.com/detail/calcsprint/ipfgjadncddiilmlankkmlimngbglnai)

## What CalcSprint Includes

- Main website with the full training experience
- Browser extension flow for quick popup sessions
- Static product pages and blog content
- Shared product identity across site and extension

In other words:

- the website is the core CalcSprint product
- the extension is a fast-access mode inside the same product

## Repository Contents

- `index.html` and the main static site
- localized folders: `ru/`, `es/`, `de/`, `zh/`
- `blog/` content
- `browser-extension/` landing page
- extension sources in:
  - `extensions/chromium/`
  - `extensions/firefox/`
  - `extensions/opera/`

## Local Preview

From the repository root:

```bash
python3 -m http.server 8140
```

Then open:

- [http://127.0.0.1:8140/](http://127.0.0.1:8140/)
- [http://127.0.0.1:8140/browser-extension/](http://127.0.0.1:8140/browser-extension/)

## Extension Install

1. Clone or download this repository.
2. In Chrome or Edge, open `chrome://extensions/` or `edge://extensions/`, enable `Developer mode`, click `Load unpacked`, and select `extensions/chromium`.
3. In Opera, open `opera://extensions`, enable `Developer mode`, click `Load unpacked`, and select `extensions/opera`.
4. In Firefox, open `about:debugging#/runtime/this-firefox`, click `Load Temporary Add-on...`, and select `extensions/firefox/manifest.json`.

## Notes

- The website remains the main CalcSprint product surface.
- The browser extension exists to complement the site, not replace it.
- Chrome is the first live store destination; other browser listings can be added as they go live.
- Extension source folders:
  - [`extensions/chromium/`](https://github.com/ivanlukichev/CalcSprint/tree/main/extensions/chromium)
  - [`extensions/firefox/`](https://github.com/ivanlukichev/CalcSprint/tree/main/extensions/firefox)
  - [`extensions/opera/`](https://github.com/ivanlukichev/CalcSprint/tree/main/extensions/opera)

## Author

Created by **Ivan Lukichev**

More projects:  
[lukichev.biz](https://lukichev.biz/)
