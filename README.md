# Top Lux — Luxury Car Dealership

A responsive static website for a fictional luxury dealership. It is built with plain HTML, CSS, and JavaScript so it can be deployed directly to GitHub Pages.

## Module / technology evidence

| Required module | Use in this project | Evidence to screenshot |
|---|---|---|
| Content Delivery Network (CDN) | Google Fonts are loaded from `fonts.googleapis.com` / `fonts.gstatic.com` in `index.html`. | Browser DevTools → Network tab, filter `font`, showing the Google Fonts requests. |
| Full-stack integration | **Not used** in this version. The project is intentionally frontend-only. The contact form is a demo interaction and does not send data to a server. | Screenshot the form and label it “Frontend-only demo; no backend integration.” |
| Cloud Databases | **Not used**. Inventory is hard-coded in the HTML for this lab prototype. | Screenshot the inventory cards and label “Static inventory data.” |
| Deploying web apps | GitHub Pages is the intended hosting/deployment method. | Screenshot the repository’s Settings → Pages screen showing the deployed URL, plus the live site. |
| IaaS / PaaS / SaaS / Serverless | GitHub Pages is a **PaaS-like managed static hosting service** for this project. No IaaS server, SaaS business API, or serverless function is required. | Screenshot GitHub Pages deployment status. |

**Important:** Do not claim that the project uses a cloud database or backend if you submit this exact version. The strongest submission is accurate: it demonstrates CDN, frontend interaction, responsive UI, and static deployment, while documenting backend modules as future improvements.

## Run locally

Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a new GitHub repository named `top-lux`.
2. Upload `index.html`, `styles.css`, `script.js`, the `assets/` folder, and this README.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder, then press **Save**.
6. Wait for GitHub to publish the site. The URL will be `https://YOUR-USERNAME.github.io/top-lux/`.
7. Test the URL in an incognito window and capture the live-site screenshot.

## Documentation content for the lecture submission

### Title
**Top Lux: A Curated Luxury Car Dealership Experience**

### Objectives of the website
The objective is to present a premium digital showroom for luxury vehicles. The website lets visitors browse a curated collection, filter vehicles by category, read brand stories, and submit a demo inquiry through a responsive interface. The project also demonstrates how a frontend-only web application can be deployed publicly with GitHub Pages.

### Features
The website includes a responsive navigation bar, cinematic hero section, inventory cards, category filtering, smooth-scroll calls to action, journal content, responsive layout breakpoints, and a client-side inquiry confirmation. The page uses semantic HTML and accessible form labels.

### Web technologies and tools used
**Frontend:** HTML5, CSS3, vanilla JavaScript, Google Fonts CDN, responsive CSS Grid/Flexbox, and GitHub Pages deployment.

**Backend:** None in the current prototype. The form is intentionally a frontend demo and does not persist submissions.

### Limitations
Inventory is static and cannot be updated from an administrator dashboard. Contact form submissions are not stored or emailed. There is no user authentication, payment workflow, CMS, or real-time vehicle availability. Images are demonstration assets and vehicle details are fictional.

### Suggested improvements
A production version could add a serverless API for inquiries, a cloud database for inventory, an admin dashboard, authentication for staff, email notifications, a CMS for journal articles, vehicle detail pages, search, and analytics. A backend would also make it possible to manage sold vehicles and prevent outdated inventory from appearing online.
