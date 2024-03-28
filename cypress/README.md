# Introduction

Testing is important to enhance reliability, making sure that any new code will not lead to a unexpected break. There are many ways to test code, but here we are focused on E2E tests, simulating user actions.

# Cypress

Cypress is a comprehensive testing framework used primarily for end-to-end testing of web applications. It provides developers with a powerful set of tools to write, automate, and execute tests that simulate real user interactions within a web browser. With Cypress, developers can create tests that cover various scenarios and functionalities of their web applications.

One of the key features of Cypress is its ability to perform tests directly within the browser, allowing developers to see exactly what is happening at each step of the test execution.

### Running tests locally

To run tests on your local machine:

1. Start the application locally (usually `npm run dev`)
2. Open another terminal and run `npm run cy:run` or `npm run cy:open`

   a. `cy:run`: this is a command to just run tests in your terminal, it's faster but you don't have too much logs.

   b.`cy:open`: will open a testing window where you can see much more info, but it`s a bit slower.

### Best practices

- `Organized Structure`: Maintain an organized structure for your tests, dividing them into relevant files or folders to help maintenance and scalability.
- `DRY (Dont Repeat Yourself)`: Avoid duplication of code/tests, because if something changes, it will also need to be changed in all those duplicated spots.
- `Descriptive Tests`: Write descriptive and clear tests that reflect the expected behavior of the application, using meaningful test names and understandable assertion messages.

### Things to Avoid

- `External State Dependency`: Avoid tests that depend on external states or data that may vary, as this can make tests inconsistent and prone to failure.
- `Long and Complex Tests`: Break long and complex tests into smaller, more focused tests to facilitate debugging and maintenance.
- `Ignoring Broken Tests`: Do not ignore broken tests; instead, prioritize fixing them to maintain the integrity of the test suite.

### Best Practices with Cypress

- Take a look at Cypress [docs](https://docs.cypress.io/guides/references/best-practices) section about testing best practices.

### Learn more

To learn more about how to write tests using Cypress, just take a look at [their docs](https://docs.cypress.io/guides/overview/why-cypress).

# Test Plan

### Overview

As important as testing is, it is just as important to have a plan about _how_ to test. Because of that, this section is focused on providing information about how to maintain and create new tests in CV`s website repository.

### Main Objectives

- `Calculator Working`: We need great reliability on our most important feature, so we need to ensure that either eligible and not elibible paths will show what we expect.
- `Donations`: As a non profit organization, we need to ensure that all donators can donate using our website.

### Calculator Overview

1. `Misdemeanor Tree`: this tree has 4 paths

   - Possession of Marijuana
   - Prostitution
   - Fishing Violation
   - General Criteria

2. `Felony Tree`: this tree has 5 paths

   - Class A felony
   - Class B felony
   - Class B felony (with prostitution)
   - Class C felony
   - Class C felony (with prostitution)

### How to test Calculator

One of our focus points is to try to duplicate code as little as possible, and to do that we can't test every single calculator path because this would cause too much duplicated code.

![Duplication problem](https://github.com/clearviction-devs/clearviction-wa/assets/80538553/82a7ef65-4d7c-4851-bcc8-7df6453b5e48)

We can note that in a hypothetical path, if we try to test all the path from "Entering into Calculator" to "Eligible Page" and from "Entering into Calculator" to "One Ineligible Page", this will cause a duplication of code on `Calculator Home`, `Page1` and `Page2` components, because they have same path. Now imagine this on plenty of paths 😨.

To avoid that we suggest to do this:

1. Start by testing our "Happy Path" (Eligible Path). - At this stage we will not check for example if some `title` is there, we will only check if the flow is happening. - using our Hypothetical Eligible Path above will be as below.
   ![Eligible path](https://github.com/clearviction-devs/clearviction-wa/assets/80538553/8ad02e68-9079-496c-b1ce-779827520451) - Note that we just need to check if we are at the page we expect and then interact with the eligible choice.

2. With stage 1 done, we can guarantee that eligible choices send the user to the right page, but we can't guarantee that those pages show the right content.

3. Let's test each page individually.
   - Each page should have some expected data and some other behavior.
   - Here we will test if `Page 1` on not eligible choice will send user to `Ineligible Page`.
   - Here we can test if a `title` is what we are supposing.

![Testing a page](https://github.com/clearviction-devs/clearviction-wa/assets/80538553/531c910c-0c87-4e7c-b52c-2947c3b93359)

4. By doing this we are trying to not duplicate code, because we already know that eligible path sends to where it's supposed to send, we just check other expected behaviors.
