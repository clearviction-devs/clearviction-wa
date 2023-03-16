# Open Seattle

This repository holds source code for the new [Clearviction website]().

## Tools / Services

- [NextJS](https://nextjs.org/) - React-based Web Framework
- [MUI](https://mui.com/) - UI / Component Library
<!-- - [Sanity](https://www.sanity.io/) - Content Management System / Content API -->

## Getting Started

Create a .env file using .env.local.example as a guide.
The secret token is used the the Sanity GROQ powered Webhooks to update the site when new content becomes available.

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
