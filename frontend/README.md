# Nuanu Front-end

## Config
node version > 18.x

## Getting started
Create **.env.local** file with the following contents:
```
NEXT_PUBLIC_URL=...
NEXT_PUBLIC_API=https://cms.example.com/api/
NEXT_PUBLIC_API_PAGE=https://cms.example.com/api/page/
NEXT_PUBLIC_STORAGE=https://cms.example.com/storage/:file*

SEARCHABLE=false
```
Required production vars:
```
NEXT_PUBLIC_API=...
NEXT_PUBLIC_API_PAGE=...
SEARCHABLE=true
```

And run the commands:
```bash
npm i
npm run dev
```

## Tasks
* dev - local development
* build - create a production build
* start - launch the production build

## Structure Overview

- `/config` - next.js split config
- `/public` - public static resources
- `/src`
  - `/components` - React/Next components (that may be reused in different pages)
  - `/layout` - global components that define the main layout of the 
  - `/lexicon` - text localization
  - `/mock` - reused mock data (both front- and back-end)
  - `/pages` - pages router with server-side-props; two endpoints for any template; template name defined in JSON object
    - `/pages/api` - API endpoints
      - `/pages/api/mock` - API mock endpoints (used only in dev mode)
        - `/pages/api/mock/page` - API mock endpoints for pages (used only in dev mode)
  - `./store` - redux store
  - `/styles` - global styles
  - `/templates` - custom page templates
    - `/templates/*/components` - unique components of this very template
  - `/types` - global types
  - `/utils` - global utilities
