# Jayaditya Buddan Ramesh — Portfolio

Personal portfolio for Jayaditya Buddan Ramesh, Poolesville Magnet Scholar (Global Ecology Studies Program).

Built with **React 18**, **Tailwind CSS v3**, and **lucide-react**.

---

## Project Structure

```
src/
├── App.jsx                  # Root component — state & layout orchestration
├── index.js                 # React entry point
├── index.css                # Tailwind directives + custom keyframes
│
├── data/
│   └── initialData.js       # Seed courses, projects, and admin password
│
├── hooks/
│   ├── useTheme.js          # Accent color theming (emerald / red)
│   └── useToast.js          # Toast notification state
│
└── components/
    ├── Header.jsx           # Sticky nav with tab switcher and accent toggle
    ├── Hero.jsx             # Full-width hero section
    ├── Footer.jsx           # Site footer
    ├── Toast.jsx            # Animated toast notification
    ├── CourseCard.jsx       # Individual course card
    ├── ProjectCard.jsx      # Individual project card with links
    ├── PortfolioTab.jsx     # Portfolio tab (courses + projects + GESP panel)
    ├── TerminalTab.jsx      # Interactive shell simulator
    └── AdminTab.jsx         # Password-gated CMS (add/delete content)
```

---

## Local Development

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

---

## Deploy to Firebase Hosting

### 1. Prerequisites

```bash
npm install -g firebase-tools
firebase login
```

### 2. Create a Firebase project (first time only)

Go to https://console.firebase.google.com, create a project, then:

```bash
firebase init hosting
# Choose: Use an existing project (or create new)
# Public directory: build
# Single-page app: Yes
# Overwrite index.html: No
```

Or just update `.firebaserc` with your project ID:

```json
{
  "projects": {
    "default": "YOUR_FIREBASE_PROJECT_ID"
  }
}
```

### 3. Build and deploy

```bash
npm run build
firebase deploy
```

Your site will be live at `https://YOUR_PROJECT_ID.web.app`

---

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## Admin / Editor Panel

The Editor tab is password-gated. The password lives in `src/data/initialData.js` as `ADMIN_PASSWORD`.

> **Important:** This is client-side only — the password is readable in the built JS bundle. 
> For a public site, either remove the Editor tab entirely or move authentication to a backend (e.g. Firebase Auth).

---

## Notes

- All content edits (add/delete via Editor) are **in-memory only** — they reset on page refresh. To persist them, connect Firebase Firestore or localStorage.
- The anti-inspect and debugger-trap code from the original has been removed — it didn't provide real protection and degraded performance.
