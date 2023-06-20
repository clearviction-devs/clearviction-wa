# Clearviction

## Table of Contents

- [Clearviction](#clearviction)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
  - [Our Mission](#our-mission)
  - [Development Setup](#development-setup)
    - [Installation](#installation)
    - [Other Commands](#other-commands)
  - [Development Process](#development-process)
  - [Sanity](#sanity)
  - [Tools / Services](#tools--services)
  - [Get In Contact](#get-in-contact)
  - [License](#license)

## About The Project

One in four Washingtonians have been involved in the criminal justice system. Those with a criminal record face
significant barriers to daily life after completing their prison terms, making it harder to find housing and
employment, to gain professional credentials, and to be involved in the life of their community.

[Washington State’s New Hope Act](https://app.leg.wa.gov/billsummary?BillNumber=2890&Year=2017) makes it easier for people with past criminal records to have their convictions
vacated. Yet the system is slow and inefficient. We have identified opportunities to use technology to streamline
this process, and want to explore which of these technological possibilities would make the most sense to prototype,
given user needs and volunteer resources.

We are a civic-tech open source project and part of the [Democracy Lab](https://www.democracylab.org/projects/226) organization, which is a project within the [Open Seattle](https://openseattle.org/projects/) organization.

## Our Mission

To benefit individuals with criminal convictions and decrease lifelong “collateral consequences.” We have identified the first product we hope to ship to the KCBA to help automate the process for record clearance (a pain point and manual process for lawyers): a conviction eligibility calculator.

We look forward to collaborating with you.

## Development Setup

This repo is for our informational website, which will eventually be home to the eligibility calculator mentioned above.

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

<!-- ```bash
npm test
```

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information. -->

```bash
npm run build
```

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Development Process

1. Create a .env file using .env.local.example as a guide.
   - The secret token is used the the Sanity GROQ powered Webhooks to update the site when new content becomes available.
2. Create your feature branch `git checkout -b feature/your-feature-name`
3. Commit your changes `git commit -m "commit message describing your changes"`
4. Push your changes to your feature branch `git push origin feature/your-feature-name`
5. Create a Pull Request in GitHub against the `staging` branch
6. Once all changes in `staging` are verified, merge `staging` to `main` (`main` should only ever be merged to from `staging`)

## Sanity

We are using [Sanity](https://www.sanity.io/) as our CMS. You can find the Sanity repository [here](https://github.com/clearviction-devs/clearviction-sanity).

Make sure you read the dev guide on how to use Sanity [here](https://github.com/clearviction-devs/clearviction-sanity#readme). Changes involving calculator pages, and possibly other content may need to be made in the Sanity repository as well as [Sanity Studio](https://clearviction.sanity.studio/desk).

## Tools / Services

- [NextJS](https://nextjs.org/) - React-based Web Framework
- [MUI](https://mui.com/) - UI / Component Library
- [Sanity](https://www.sanity.io/) - Content Management System / Content API
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress) - Front-end testing tool

## Get In Contact

Find more information about this project, and Open Seattle [here](https://democracylab.org/index/?section=AboutProject&id=226).

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
