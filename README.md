# HostelHub: Student Hostel Finder

**Course:** CS4032 Web Programming, Assignment 3 (Next.js Frontend)
**Group number:** G__
**Topic:** 54, Student hostel finder

## Team

| Name | Roll number |
|---|---|
| Talal Naeem   | 24i-2053 |
| Hassam Ali    | 24i-2115 |
| Ahsan Arshad  | 24i-2049 |

## About the app

HostelHub helps students find accommodation near their campus. Users can browse hostels, search, filter and sort them, view hostel details, shortlist their favourites, and send a visit request. It is a frontend-only app built with Next.js, using mock data and React state instead of a backend.

## How to run

```bash
npm install
npm run dev
```

Then open http://localhost:3000. To check a production build, run `npm run build`.

## Routes

| Route | What it shows |
|---|---|
| `/` | Home page with hero, featured hostels and how it works |
| `/hostels` | Hostel listing with search, filter and sort |
| `/hostels/[id]` | Dynamic detail page for one hostel (404 for unknown IDs) |
| `/shortlist` | Hostels the user has saved |
| `/visit-request` | Visit request form with validation |
| `/about` | About the app and the team |

## Contributions

| Member | Pages | Components |
|---|---|---|
| A: Name | `/`, `/about`, `layout.tsx`, `not-found.tsx` | Navbar, Footer, Button, Hero, SectionHeading |
| B: Name | `/hostels`, `/hostels/[id]`, `loading.tsx` | HostelCard, SearchBar, FilterPanel, HostelGallery, AmenityList, HostelsExplorer |
| C: Name | `/visit-request`, `/shortlist` | VisitRequestForm, FormField, ConfirmationModal, FavouriteButton, ShortlistProvider |

## Links

- **Repository:** (paste the link from the browser address bar)
- **Video demo:** (Google Drive or YouTube link, if the video is not uploaded to the portal)
- **Live site (Vercel, bonus):** (add after deployment)

## AI tools used

- Claude: used for planning the work split, help with project setup and Git, and code assistance. All members reviewed and can explain the code they present.