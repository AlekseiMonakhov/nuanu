# Nuanu Front-end

## Config
node version > 18.x

## Environment variables
- `NEXT_PUBLIC_URL` - website base URL;
- `API_URL` - back-end API routes base URL; preferred format - `https://data.website.com/api`;
- `API_PAGE_URL` - back-end pages base URL; preferred format - `https://data.website.com/api/page`;
- `STORAGE` - back-end media storage; used to proxy static files; preferred format - `https://data.website.com/storage/:file*`
- `SECRET_TOKEN` - secret token for private actions;
- `SEARCHABLE` - the website can be crawled by search engines; `false` by default.

### Required production vars:
- `NEXT_PUBLIC_URL=___`
- `API_PAGE_URL=___`
- `SECRET_TOKEN=___`
- `SEARCHABLE=true`

## Tasks
* `dev` - local development
* `build` - create a production build
* `start` - start the website in production

## Structure Overview

- `/config` - next.js additional config
- `/public` - static resources
- `/src`
  - `/__mock` - front-end mock data
  - `/components` - React/Next components (that may be reused in different pages)
  - `/layout` - global components that define the main layout of the page
  - `/lexicon` - text localization
  - `/pages` - next.js routes
  - `/store` - redux store
  - `/styles` - global styles
  - `/templates` - custom page templates
    - `/templates/*/components` - unique template components
  - `/types` - global types
  - `/utils` - global utilities

## `src/pages` directory
In comparison to the classic Next.js application structure, this template has only 2 page endpoints: `index` & `slug`. These routes use ISR.

Both run the same function `getPageProps` which fetches data from back-end, and the fetching URL depends on the current URL of the page. For a user who runs `http://website.com/en/about`, the API URL will be `http://data.website.com/api/page/en/about`. User headers and GET parameters are not transferred through API.

While development without back-end, mocks in `src/__mock` should be created.

## Back-end preferences
When updating a certain page, the back-end should send a request to clear the SWR cache via `/api/revalidate?token=12345678&path=/en` endpoint.
This logic works well on Vercel but has pitfalls on DigitalOcean App Platform: specifically, AppPlatform runs through Cloudflare which creates a new layer of caching, which means that after revalidating the page may return old content because of Cloudflare cache. In this case, a newer version of the page may be seen when accessing it with a unique GET parameter or making SWR cache time shorter in `/settings.ts` or in `global.meta.swr` property.
