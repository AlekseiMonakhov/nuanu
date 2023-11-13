# Nuanu Front-end

## Config
node v20.2.0 \
npm v9.6.6

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
