# Introduction
CI/CD pipelines are an important part of any production quality code base. By creating a CI/CD pipeline we not only ensure the quality and stability of Clearviction’s code base but we also make our lives easier, as members of the Tech Foundations team. At the most general level, CI/CD pipelines are a collection of automated workflows that execute specific tasks under specific circumstances. Before we move on, let’s draw the distinction between CI and CD.

### Continuous Integration
A software development practice that involves the frequent integration of code changes into a shared repository, with automated testing and validation to detect and resolve integration issues early
> Ex: Running automated tests through github actions on PR’s to ensure code quality

### Continuous Development
A software development practice where code changes are automatically deployed to production environments after passing automated tests and quality checks
> Ex: AWS amplify automatically redeploys a production site when new code is merged to the main branch

## In order to get the maximum benefit from our CI/CD pipeline, we must
1. Identify pain points in the development workflow that could be alleviated by implementing automated workflows
1. Identify tools (either internal AWS or github tools) that we can use to implement the necessary workflows 
1. Ensure comprehensive documentation for workflows that are created

## Caveats
- CI/CD pipelines are a massive topic to research, it can be very easy to get bogged down in all the information
- Implementing automated testing (Unit, end-to-end, etc.) as part of our CI/CD pipeline will be critical to ensuring code quality and functionality
- Automated workflows can often be expensive in terms of time, easily adding several minutes to the PR process as we wait for the workflows to complete. We need to ensure we are creating optimal workflows that tangibly benefit us

## Pain Points
- We need to ensure we have consistent preview builds for every PR that is opened
- We need to ensure the packages we are using are secure and do not conflict with one another
- We need to ensure that new third-party dependencies are really necessary before being introduced in our codebase
- We can streamline the process of periodically merging staging to main through automation

# Workflows Explained
## Dependency Check
This workflow ensures that pull requests targeting the `staging` branch are checked for dependency issues, and comments are added to the PR with audit details. If critical or high vulnerabilities are found, the workflow rejects the PR.

### Tools Used:
**Node.js** `actions/setup-node@v4`: a tool for managing and running JavaScript applications on the server side  
**GitHub Actions** `actions/checkout@v4`: automates the process of checking out your code repository  
**Jq**: a lightweight and flexible command-line JSON processor  
**NPM**: the Node Package Manager, used to install and manage project dependencies  

### Steps:
1. **Trigger** - the workflow is triggered on pull requests targeting the `staging` branch
1. **Set up Node.js** - use the `actions/setup-node@v4` action to set up Node.js v18
1. **Checkout code** - use the `actions/checkout@v4` action to fetch the code from the repository
1. **Install Jq** - install the `jq` tool to process JSON data
1. **Install dependencies** - run `npm install` to install project dependencies
1. **Check for dependency issues**
    - run `npm audit` to check for dependency issues and save the results to a file (`issues-file.txt`)
    - the `||` true ensures that the workflow continues even if vulnerabilities are found
1. **Comment on PR with issues**
    - create a comment file (`pr_comment.txt`) indicating if there are dependency issues
    - if issues are found, retrieve the PR number and use the GitHub REST API to comment on the PR with the issues
1. **Check for critical and high vulnerabilities**
    - check if the `issues-file.txt` contains critical or high vulnerabilities
    - if found, reject the PR by exiting with `code 1`

## New 3rd Party Dependency Check
This GitHub Actions workflow is designed to automatically scrutinize pull requests for any changes to `package.json` or `package-lock.json` files. The workflow targets the `staging` branch and ensures that any new third-party dependencies introduced in a pull request are properly justified.

### Tools Used:
**Node.js** `actions/setup-node@v4`: used for setting up the Node.js environment which is crucial for JavaScript-based projects  
**GitHub Actions** `actions/checkout@v4`: automates the process of checking out the code from the repository, allowing for further actions like dependency checks  
**Jq**: a lightweight command-line JSON processor, used in this workflow to parse and manipulate JSON data as needed  

### Steps:
1. **Trigger** - the workflow is activated on pull requests targeting the `staging` branch, specifically when there are changes in `package.json` or `package-lock.json`
1. **Set up Node.js** - utilizes `actions/setup-node@v4` to set up Node.js v18. This step ensures that the Node.js environment is prepared for any Node.js-specific operations
1. **Checkout code** - employs `actions/checkout@v4` to fetch the latest code from the pull request. This step is essential to access and analyze the code changes in the pull request
1. **Install Jq** - installs the `jq` tool for processing JSON data, which can be used to handle and manipulate JSON formatted outputs or files
1. **Check for 3rd party dependencies**
    - checks for changes in `package.json` or `package-lock.json`
    - sets the flags `PACKAGE_JSON_CHANGED` and `PACKAGE_LOCK_JSON_CHANGED` to `true` if changes are detected in respective files
    - these flags are then written to the `$GITHUB_OUTPUT` variable to be used by subsequent steps
1. **Check if Comment Already Posted**
    - fetches all existing comments from the pull request using the GitHub API
    - searches these comments for a unique tag `<!-- DependencyCheckTag -->`. This tag is used to identify if the automated comment has already been posted
    - if the tag is found, it sets a flag `comment_already_posted=true` to prevent reposting. Otherwise, it sets `comment_already_posted=false`
1. **Post comment with form**
    - this step is conditional and only executes if changes are detected in either of the specified files and the comment has not already been posted (`comment_already_posted=false`)
    - constructs a detailed comment body asking the pull request author to justify the inclusion of new third party dependencies
    - uses the GitHub API to post this comment on the pull request, and tags the author, thus ensuring the author is aware of the need to provide the necessary justification
    - the comment includes a structured form with specific questions and considerations regarding the new dependencies
    - to prevent duplicate comments on subsequent pushes to the same PR, the comment includes a unique tag `<!-- DependencyCheckTag -->` at the end

## Merge Staging -> Main Cron Job
This workflow merges the `staging` branch into `main` every other Tuesday. This is a process that is necessary to update the production website with new changes from development/the staging branch. Some basic verifications are done before the merge process to ensure that this can be completed successfully, and if something goes wrong, an issue is created to inform that the process failed.

### Tools Used:
**Github Actions**
  - `actions/checkout@v4`: checks out the repository code
  - `actions/setup-node@v4`: manages and runs javascript code
  - `actions/cache@v3`: caches next.js files for use in other jobs

### Jobs:
1. **Install** - install project dependencies
1. **Lint** - verify that there are no lint issues
1. **Build** - build the project
1. **Merge** - get updated data from `staging` branch, merge into `main` and push to repository
1. **Handle Fail** - if any of the above jobs fails, create an issue in our repository about the failure

### Steps:
1. **Trigger** - the workflow is triggered either by the cron job every other week or by manually clicking a button
1. **Permissions** - permits the Github bot to push into the repository
1. **Checkout code** - uses `actions/checkout@v4` action to fetch the code from the repository
1. **Set up Node.js** - uses `actions/setup-node@v4` action to set up Node.js v18
1. **Cache** - uses `actions/cache@v3` to cache the build and dependencies to use in other jobs
1. **Configure user** - sets the `origin` as the user`s `PAT` which was previously created as an Github Actions `.env` variable in the repository settings
1. **Merge to main and push** - uses `merge` with `fast-forward only` and push to main
1. **Check workflow status** - uses Github CLI to execute the creation of an issue if any part of the workflow fails

## Preview Build
This workflow for preview builds is automated through AWS Amplify. Developers initiate the process by opening pull requests, and AWS Amplify takes care of automatically building and deploying preview environments for each pull request. The team can then review changes using the provided Amplify Preview URL before merging into the main branch. Monitoring is done through the Amplify Console, which offers insights into the build process.

### Tools Used:
**GitHub Pull Requests**: Pull requests are opened by developers to propose and discuss changes before merging them into the main branch  
**AWS Amplify Automatic Preview Builds**: AWS Amplify is configured to automatically detect pull requests and trigger preview builds for each opened pull request  
**Amplify Console**: Amplify Console provides a continuous deployment and hosting service for web applications with features like automatic builds, hosting, and custom domains  

### Steps:
1. **Open Pull Request** - developers open a pull request targeting the `staging` branch in the GitHub repository
1. **Automatic Amplify Preview Build** - AWS Amplify is configured to automatically detect pull requests and trigger preview builds for each opened pull request
1. **Amplify Environment Setup** - Amplify automatically sets up a preview environment for the pull request, creating a unique URL for developers to preview the changes
1. **Review Preview Changes** - Developers can access the automatically generated Amplify Preview URL provided in a comment on the pull request to review and test the changes that were made

## Build-Test
**This workflow is not yet implemented, but is designed and ready to ensure a seamless integration for testing when we are ready.** This workflow fires whenever a pull request is opened against the `staging` branch, and will build the application and run any tests associated. If any of the tests fail, checks will fail and the PR will not be allowed to merge.

### Tools Used:
**NPM**: Node package manager  
**Github Actions**  
  - `actions/checkout@v4`: checks out the repository code
  - `actions/setup-node@v4`: manages and runs javascript code
  - `actions/cache@v3`: caches next.js files for use in other jobs

### Steps:
1. **Trigger** - on pull request to the `staging` branch
1. **Checkout repository code and setup Node v18**
1. **Next cache** - to improve build performance Next saves a cache that is shared between builds
1. **Install dependencies** - runs a clean install of all project dependencies
1. **Build** - builds the project, and requires that secrets be saved in `settings -> actions -> secrets`, and then pulled into the workflow file via environment variables
1. **Test** - runs tests if the test script is present in the `package.json` file

# Criteria For Adding New Workflows

1. **Strategic Relevance and Alignment**  
The workflow must be critically relevant to our current operational goals and strategic objectives.
1. **Problem-Solving Efficacy**  
The workflow should address and resolve a specific, identified pain point within our operations.
1. **Maintainability and Scalability**  
The proposed workflow should be designed with maintainability in mind. Furthermore, it should be scalable to accommodate future expansions or modifications without significant restructuring.
1. **Documentation and Knowledge Transfer**  
Comprehensive documentation is mandatory for any new workflow integration. This should include a clear description of the workflow's functionality, architecture, and integration points, as well as guidelines for maintenance and troubleshooting.
1. **Cost-Effectiveness and ROI Analysis**  
Evaluate the cost-benefit ratio of the workflow. The workflow should demonstrate a clear return on investment (ROI) through either direct cost savings, increased productivity, or other quantifiable metrics.

# Creating workflows with Github Actions
GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.  

GitHub Actions goes beyond just DevOps and lets you run workflows when other events happen in your repository. For example, you can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository.

## Components of GA
You can configure a GitHub Actions _workflow_ to be triggered when an _event_ occurs in your repository, such as a pull request being opened or an issue being created. Your workflow contains one or more _jobs_ which can run in sequential order or in parallel. Each job will run inside its own virtual machine _runner_, or inside a container, and has one or more _steps_ that either run a script that you define or run an _action_, which is a reusable extension that can simplify your workflow.

## Workflows
A workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked into your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.  

Workflows are defined in the `.github/workflows` directory in a repository, and a repository can have multiple workflows, each of which can perform a different set of tasks. For example, you can have one workflow to build and test pull requests, another workflow to deploy your application every time a release is created, and still another workflow that adds a label every time someone opens a new issue.  

- You can reference a workflow within another workflow. For more information, see ["Reusing workflows."](https://docs.github.com/en/actions/using-workflows/reusing-workflows)  For a complete list of events that can be used to trigger workflows, see [Events that trigger workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows).
- [Workflow syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#run-name)
- Creating dependent jobs - use the `needs` keyword
- [Caching dependencies](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows) - If your jobs regularly reuse dependencies, you can consider caching these files to help improve performance. Once the cache is created, it is available to all workflows in the same repository, uses `@actions/cache`.
- [Using filters](https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#using-filters-to-target-specific-paths-for-pull-request-or-push-events) - When using the `push` and `pull_request` events, you can configure a workflow to run based on what file paths are changed. Path filters are not evaluated for pushes of tags.

### Manually running workflows
Use for testing workflow - To run a workflow manually, the workflow must be configured to run on the `workflow_dispatch` event. To trigger the `workflow_dispatch event`, your workflow must be in the default branch.

### Useful events
- Pull request + types
- On pull request - type = closed and merged = true 
- On push - create branch deployments pre-PR for shorter feedback loop
- On [workflow run](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_run) - to run at the conclusion of another workflow
- Use required workflows as status checks on pull requests

## Jobs
A job is a set of _steps_ in a workflow that is executed on the same runner. Each step is either a shell script that will be executed, or an _action_ that will be run. Steps are executed in order and are dependent on each other. Since each step is executed on the same runner, you can share data from one step to another. For example, you can have a step that builds your application followed by a step that tests the application that was built.  

You can configure a job's dependencies with other jobs; by default, jobs have no dependencies and run in parallel with each other. When a job takes a dependency on another job, it will wait for the dependent job to complete before it can run. For example, you may have multiple build jobs for different architectures that have no dependencies, and a packaging job that is dependent on those jobs. The build jobs will run in parallel, and when they have all completed successfully, the packaging job will run.  

- Use `jobs.<job_id>` to give your job a unique identifier
- Choosing the runners - Use `jobs.<job_id>.runs-on` to define the type of machine to run the job on

## Actions
An _action_ is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task. Use an action to help reduce the amount of repetitive code that you write in your workflow files. An action can pull your git repository from GitHub, set up the correct toolchain for your build environment, or set up the authentication to your cloud provider.

## Runners
A runner is a server that runs your workflows when they're triggered. Each runner can run a single job at a time. GitHub provides `Ubuntu Linux`, `Microsoft Windows`, and `macOS` runners to run your workflows; each workflow run executes in a fresh, newly-provisioned virtual machine.

## Using `env` variables in single workflows
To set a custom environment variable for a single workflow, you can define it using the env key in the workflow file. The scope of a custom variable set by this method is limited to the element in which it is defined. You can define variables that are scoped for:
- The entire workflow, by using [env](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#env) at the top level of the workflow file
- The contents of a job within a workflow, by using `jobs.<job_id>.env`
- A specific step within a job, by using `jobs.<job_id>.steps[*].env`

## Things to think about
- [Usage limits](https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration) and [limiting actions](https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization) for org
- Creating a [readme](https://docs.github.com/en/actions/creating-actions/about-custom-actions?learn=create_actions&learnProduct=actions#creating-a-readme-file-for-your-action) for the action
