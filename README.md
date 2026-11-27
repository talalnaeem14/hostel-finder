# HostelHub: Student Hostel Finder

**Course:** CS4032 Web Programming, Assignment 3 (Next.js Frontend)
**Group number:** G49
**Topic:** 54, Student hostel finder

## Team

| Name | Roll number | Role |
|---|---|---|
| Talal Naeem | 24i-2053 | Member A |
| Hassam Ali | 24i-2115 | Member B |
| Ahsan Arshad | 24i-2049 | Member C |

## About the app

HostelHub helps students find accommodation near their campus. Users can browse hostels, search, filter and sort them, view hostel details, shortlist their favourites, and send a visit request. It is a frontend-only app built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS, using mock data and React state instead of a backend.

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
| `/hostels` | Hostel listing with search, filter and sort (shows a loading state) |
| `/hostels/[id]` | Dynamic detail page for one hostel (404 for unknown IDs) |
| `/shortlist` | Hostels the user has saved |
| `/visit-request` | Visit request form with validation (`?hostel=<id>` prefills the hostel) |
| `/about` | About the app and the team |
| any other URL | Custom 404 page |

## Contributions

| Member | Pages and files | Components |
|---|---|---|
| **A: Talal Naeem** | `/`, `/about`, `app/layout.tsx`, `not-found.tsx`, README, Vercel deployment | Navbar (with shortlist count badge), Footer, Button, Hero, SectionHeading |
| **B: Hassam Ali** | `/hostels`, `/hostels/[id]`, `loading.tsx`, `data/hostels.ts`, `types/hostel.ts` | HostelCard, SearchBar, FilterPanel, HostelGallery, AmenityList, RatingBadge, HostelsExplorer |
| **C: Ahsan Arshad** | `/visit-request`, `/shortlist` | VisitRequestForm, FormField, ConfirmationModal, FavouriteButton, ShortlistProvider, ShortlistView |

## Client Components

| Component | Owner | Why it is a Client Component |
|---|---|---|
| Navbar | A | Mobile menu toggle (`useState`), click handlers and active link (`usePathname`) |
| HostelsExplorer | B | Holds the search, filter and sort state |
| VisitRequestForm | C | Controlled inputs, validation errors and submit state |
| ShortlistProvider, FavouriteButton, ShortlistView | C | Shared shortlist state through React context, plus click handlers |

All pages stay Server Components. `HostelCard` is reused on Home, Listing and Shortlist with different props (`showAmenities`, `actions`).

## Links

- **Repository:** https://github.com/talalnaeem14/hostel-finder
- **Video demo:** <Google Drive or YouTube link, if not uploaded to the portal>
- **Live site (Vercel, bonus):** <add after deployment>

## AI tools used

- **Claude (Anthropic):** used for planning the work split, help with project setup and Git, and code assistance. All members reviewed and can explain the code they present.