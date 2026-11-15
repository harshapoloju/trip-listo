# Trip Listo

**Plan it. Pack it. Lock the door.**

Trip Listo is a free trip checklist that runs in your browser. It walks you
through a trip in the order you actually do it: plan, book, pack, then the
last checks before you leave the house.

**Open it:** https://harshapoloju.github.io/trip-listo/

## What it does

- **Plan:** destination, dates, travelers and the kind of trip. One tap opens
  Claude, ChatGPT, Gemini or another assistant with an itinerary prompt
  already written from your details.
- **Book:** links to flight, stay, car and activity sites. Tick the one you
  booked with, or skip a group you do not need.
- **Pack:** ready-made lists (essentials, office trip, hiking, flying, road
  trip, beach, kids) that you can edit, plus your own lists.
- **Leave:** the checks people forget: time off approved, out-of-office set,
  stove off, doors locked.
- **Smart defaults:** choose Drive and the flight links step aside; a same-day
  trip hides stays. You can always switch things back.
- **Several trips at once**, a history of past trips, and new trips that start
  from your last one.
- **Move a trip to another device** with a link or QR code.

Everything is editable: items, lists, links and assistants.

## Install it like an app

- **iPhone (Safari):** Share, then "Add to Home Screen".
- **Android (Chrome):** menu, then "Install app" or "Add to Home screen".
- **Computer (Chrome or Edge):** the install icon in the address bar.

After the first visit it also works offline.

## Privacy

There is no account, no server and no tracking. Your trips are stored only in
your browser on your device. Trip details leave your device only when you
choose to open an assistant link (which sends the itinerary prompt to that
assistant) or when you share a transfer link yourself.

Because the data lives in your browser, clearing browser data erases it. Use
**More > Keep a safe copy** if you want a backup.

## Make it your own

The whole app is one file, `index.html`, with no build step. To change it,
give that file to an AI assistant with a prompt like this:

> Here is my trip checklist app, a single self-contained HTML file with no
> backend. Keep it as one file, keep the saved-data format working, and keep
> the checks that clean imported data. Then make this change: [describe it].

Good first changes: rename the app (one line, `var APP=`), change the default
lists (`TEMPLATES`), or change the default booking links (`BOOK`).

To run it on your computer, download the folder and open `index.html`. To host
your own copy for free, fork this repository and turn on GitHub Pages
(Settings > Pages > Deploy from a branch > `main`, folder `/ (root)`).

If you publish a new version, change the `CACHE` name at the top of `sw.js`
so phones that installed the app pick up the update.

## What is in this folder

| File | What it is |
| --- | --- |
| `index.html` | The whole app |
| `manifest.webmanifest`, `icons/` | Name and icons for installing it |
| `sw.js` | Offline support |
| `fonts/`, `vendor/` | Bundled fonts and the QR code library |

## Credits

Built by Harsha with Claude. MIT licensed; see `LICENSE`. Bundled fonts and
the QR library have their own licenses; see `THIRD-PARTY.md`.
