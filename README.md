# Conviction Vacation Initiative

## Table of Contents

- [Conviction Vacation Initiative](#conviction-vacation-initiative)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
  - [Development Setup](#development-setup)
    - [Installation](#installation)
    - [Other Commands](#other-commands)
  - [Development Process](#development-process)
  - [Sanity](#sanity)
  - [Tools / Services](#tools--services)
  - [License](#license)

## About The Project

Formerly Clearviction, we are a civic-tech open source project.

One in four Washingtonians have been involved in the criminal justice system. Those with a criminal record in Washington face significant barriers to daily life after completing their prison terms, making it harder to find housing and employment, to gain professional credentials, and to be involved in the life of their community. [Washington State’s New Hope Act](https://app.leg.wa.gov/billsummary?BillNumber=2890&Year=2017) makes it easier for people with past criminal records to have their convictions vacated. Even then, the process of vacating a conviction is very convoluted, making it difficult for most people to navigate.

## Development Setup

To get our static website up and running on your machine, you can follow the commands below:

```bash
git clone https://github.com/clearviction-devs/clearviction-wa.git
```

### Installation

In the project directory, you can run:

1. Ensure you have `nodejs` installed on your machine using whatever system package manager, on Mac using [homebrew](https://brew.sh) run:

   ```bash
   brew install nodejs
   ```

1. Install project dependecies

   ```bash
   npm install
   ```

1. Start the app in development mode

   ```bash
   npm run dev
   ```

1. Visit [http://localhost:3000](http://localhost:3000) to view it in the browser

### Other Commands

```bash
 npm run build
```

The underlying command, `next build` generates an optimized version of your application for production. The output is generated inside the `.next` folder.

## Development Process

1. Create a `.env` file using `.env.local.example` as a guide.
2. Create your feature branch `git checkout -b feature/your-feature-name`
3. Commit your changes `git commit -m "commit message describing your changes"`
4. Push your changes to your feature branch `git push origin feature/your-feature-name`
5. Create a Pull Request in GitHub against the `staging` branch
6. Once all changes in `staging` are verified, `staging` is merged into `main` by every 2 weeks via cron job (`main` should only ever be merged to from `staging`)

## Sanity

We are using [Sanity](https://www.sanity.io/) as our CMS. You can find the Sanity repository [here](https://github.com/clearviction-devs/clearviction-sanity).

Make sure you read the dev guide on how to use Sanity [here](https://github.com/clearviction-devs/clearviction-sanity#readme). Changes involving calculator pages, and possibly other content may need to be made in the Sanity repository as well as [Sanity Studio](https://clearviction.sanity.studio/desk).

## Tools / Services

- [NextJS](https://nextjs.org/) - React-based Web Framework
- [MUI](https://mui.com/) - UI / Component Library
- [Sanity](https://www.sanity.io/) - Content Management System / Content API

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
