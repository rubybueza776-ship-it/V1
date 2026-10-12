SCHOOLTRACK EAPIHS — MAROON & GREEN REDESIGN
==============================================

This ZIP contains the redesigned SchoolTrack offline inventory web app.
Theme: maroon and green accents with clean neutral surfaces. Includes light/dark mode.

SchoolTrack EAPIHS — Offline School Inventory

FILES
- index.html: application screen
- style.css: Maroon + Green design and readable dark mode
- app.js: inventory functions and local data storage
- manifest.json: home-screen app information
- service-worker.js: offline cache
- click.mp3: button sound
- icon-512.png: application icon

FEATURES
- Dashboard and stock totals
- Add/edit/delete inventory items
- Dropdowns for item, category, condition, location and responsible person
- Borrow, return, repair, complete repair, missing and found actions
- Problem reports and status updates
- Transaction history, JSON backup/restore and CSV export
- Maroon + Green buttons, light/dark mode, click sound toggle
- Saves data locally on this device
- Remembers the last page and intercepts Android/browser Back to keep the app open; on a non-dashboard page Back returns to Dashboard

IMPORTANT OFFLINE INSTALLATION
1. Upload ALL files to the ROOT of your GitHub Pages repository (same folder as index.html). Replace all old files together; do not mix versions.
2. Open the published HTTPS website while online. Wait for the page to finish loading and keep it open for about a minute.
3. Close and reopen it once while online so the service worker can install and cache the files.
4. In Chrome, use menu (⋮) > Add to Home screen / Install app.
5. Test by turning off Wi-Fi and mobile data, then opening the Home screen icon.

If the app was previously installed, remove the old Home screen shortcut and reload the site online once to update its cache. A service worker can only cache the files after the site has been visited online. Browser storage can be cleared by Android/browser cleanup, so make regular backups using History & Backup.

This is a Progressive Web App (PWA), not an APK. GitHub Pages needs HTTPS and an initial online visit. No web app can stop Android from force-stopping it, but the Back button is handled inside SchoolTrack when running in the browser/PWA.

Quality score field has been removed as requested.


BACKUP AND RESTORE
- Open the Backup option to download one JSON backup containing inventory items, reports, transaction history, backup date/time, and settings (theme, sound, and low-stock threshold).
- Keep the downloaded SchoolTrack-EAPIHS-Backup-YYYY-MM-DD.json file in Downloads or another safe location.
- Restore asks for confirmation because it replaces current records. Make a backup of current data first if you need to keep it.
- CSV export is a spreadsheet-friendly inventory list; JSON backup is the complete restore file.
- Backups downloaded to your phone are not automatically synced online.


ACCOUNT FEATURE NOTES
- First open: create the first Administrator account, then sign in.
- Administrator can create local Staff or Administrator accounts.
- Users can edit their profile, change password, and sign out.
- Actions are labeled with the signed-in username in transaction history.
- Account data is saved in this browser on this device. It does not sync between phones.
- This offline account feature is a basic local access gate, NOT server-grade security.
  Anyone with technical access to the browser storage may be able to bypass it.
- Back up your records before clearing browser data or changing phones.
