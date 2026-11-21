# 🥗 Daily Plate Log

A simple food tracker for logging meals with photos and downloading each day as a PDF. It runs entirely in the browser, with no server, no account and no build step. It can also be installed on a phone like an app.

## Features

- **Four meals a day:** breakfast, lunch, dinner and snacks, each with a vegetarian sample illustration (idli with sambar, a thali, paneer with roti, fruit chaat).
- **Multiple photos per meal:** upload several pictures at once, or capture them one after another with your camera (up to 6 per meal). Tap a thumbnail to make it the cover photo, or tap the × to remove it.
- **Food entries:** add what you ate to each meal and remove entries you don't want.
- **Day navigation:** move between days with the arrows, the date picker or the Today button.
- **Log tab:** see every logged day, newest first, with meal photos, foods and the time each meal was added. Filter by meal, open a day, or download its PDF.
- **PDF download:** save the selected day as a PDF with all meal photos (all the same size, two side by side), foods, times and a log section, in the same black theme as the app. The PDF is built in the browser, so no library is needed.
- **Black theme:** a single black and white design, with no color options.
- **Installable app:** works offline once installed, and adds home screen shortcuts.

## Install on a phone (Chrome)

The app must be served over HTTPS, for example with GitHub Pages.

1. Open your site in Chrome on Android.
2. Tap **Install app** on the page, or open the Chrome menu (⋮) and choose **Install app** (or **Add to Home screen**).
3. Open **Plate Log** from your home screen. It runs full screen like a normal app.

Long-press the app icon to use the shortcuts **Today's meals** and **Meal log**.

On iPhone, open the site in Safari, tap Share, then **Add to Home Screen**.

## Getting started

1. Download or clone this repository.
2. Open `index.html` in a browser.

To run it from a local server instead (this also lets you test the install):

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Push these files to the root of your repository.
2. In the repository, open **Settings → Pages**, choose the main branch and the root folder, then save.
3. Open the `https://<your-name>.github.io/<repo-name>/` link on your phone.

## Project structure

```
daily-plate/
├── index.html             # page structure
├── style.css              # black theme styles
├── script.js              # meals, photos, log, PDF export and install button
├── manifest.webmanifest   # app name, icons, colors and shortcuts
├── sw.js                  # service worker for offline use
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   └── maskable-512.png
└── README.md
```

## Notes

- **Your data stays on your device.** Entries and photos are saved in the browser's local storage. Clearing site data removes them.
- **Storage is limited.** Browsers allow roughly 5 MB of local storage. Photos are resized before saving, and again for the PDF, where every photo is the same size, but if storage fills up the app tells you to remove a photo.
- **Updating the app:** after you change the files, raise the version in `CACHE` at the top of `sw.js` (for example `daily-plate-v2`) so phones pick up the new version.
- **Camera capture** uses the live camera when the browser allows it (HTTPS or localhost). Otherwise it falls back to your device's camera picker, which takes one photo at a time.
- **Fonts** (DM Sans and Outfit) load from Google Fonts. Without an internet connection the app uses your system fonts and works as normal.

## Customizing

- Change colors in the `:root` block at the top of `style.css`, and the app colors in `manifest.webmanifest`.
- Change meal names and sample illustrations in the `MEALS` list at the top of `script.js`.

## License

Add the license of your choice, for example MIT.
