# Introduction
Testing are important to enhance confiability, making sure that every new code will not lead in a unexpected break.
There are some ways to test code, but here we are focused on E2E tests, simulating user actions.

### Cypress
Cypress is a comprehensive testing framework used primarily for end-to-end testing of web applications. It provides developers with a powerful set of tools to write, automate, and execute tests that simulate real user interactions within a web browser. With Cypress, developers can create tests that cover various scenarios and functionalities of their web applications. 

One of the key features of Cypress is its ability to perform tests directly within the browser, allowing developers to see exactly what is happening at each step of the test execution.

### Running tests locally
Those are the steps to run tests in your local machine:

1. Start the application locally. (usually `npm run dev`)
2. Open another terminal and run `npm run cy:run` or `npm run cy:open`

    a. `cy:run`: this is a command to just run tests in your terminal, it's faster but you don't have to much logs.
    
    b.`cy:open`: will open a testing window where you can see much more info, but it`s slower.   

### Learn more
To learn more about how to write tests using cypress, just take a look in [cypress doc](https://docs.cypress.io/guides/overview/why-cypress)
