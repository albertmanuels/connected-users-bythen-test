# Connected Users Bythen Test

This project is a mini social network platform similar to LinkedIn, where user can see their connections.
The data that have been use in this project is fake data which fetched from https://reqres.in/

## Purpose
The purpose of this project is to complete the first technical test as Frontend Developer at Bythen.ai. 
Hopefully there will be any good news from the reviewer.

## Tech Stack
- Next.js 14.2 (app route)
- TypeScript
- React Tanstack Query
- TailwindCSS
- Framer Motion
- Nice Modal React
- React Icons
- Regres API

## Architecture
```
├── public                  # Static file (img, icon, etc)
├── src
│   ├── app                 # routing and layout
│   ├── components          # all components related, includes layouts, pages, and shared   
|   |    └── layouts        # layout-level components
|   |    └── pages          # page-level components
|   |    └── shared         # global components or shared components
│   ├── constants           # global constants
│   ├── hooks               # global hook to query or mutations
│   ├── lib                 # reusable helper functions
└── ...
```

## Setup
1. Open terminal, then install depedencies using npm
```bash
npm run install
```

2. Run project on development mode
```bash
npm run dev
```

3. Run build. This is to check if there any errors on build time
```bash
npm run build
```

4. Run linter with fix
```bash
npm run lint:fix
```
