---
title: Getting Started with Zen's Homepage Development
draft: true
---


This guide will walk you through the steps required to set up and contribute to the development of Zen Browser's homepage. Whether you're fixing bugs, adding new features, or enhancing the design, this guide will help you get started.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Git**: Version control system to clone the repository and manage your code.
- **Node.js**: JavaScript runtime for running the development server and building the project.
- **npm**: Node package manager, which comes with Node.js.

## Step 1: Fork the Repository

1. Navigate to the [Zen Browser Homepage Repository](https://github.com/zen-browser/www).
2. Click on the "Fork" button at the top right of the repository page. This creates a personal copy of the repository under your GitHub account.

## Step 2: Clone the Repository

Once you have forked the repository, clone it to your local machine using the following command:

```bash
git clone https://github.com/<your-username>/www.git
cd www
```

Replace `<your-username>` with your GitHub username.

## Step 3: Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
```

This command installs all the necessary packages listed in the `package.json` file.

## Step 4: Start the Development Server

After installing the dependencies, you can start the development server:

```bash
npm start
```

This command will start a local server and open the homepage in your default web browser. The server will automatically reload whenever you make changes to the code.

## Step 5: Make Your Changes

You can now start making changes to the homepage. The project structure is as follows:

- **src/**: Contains the source code for the homepage.
- **public/**: Contains static files like images and HTML templates.
- **package.json**: Lists the project's dependencies and scripts.

Feel free to explore and modify the files to implement new features or fix bugs.

## Step 6: Test Your Changes

Before submitting your changes, make sure they work as expected. Check the functionality across different pages and ensure that your changes do not introduce any new issues.

## Step 7: Commit and Push Your Changes

Once you are satisfied with your changes, commit them to your local repository:

```bash
git add .
git commit -m "Description of your changes"
```

Push your changes to your forked repository:

```bash
git push origin main
```

## Step 8: Create a Pull Request

After pushing your changes, go to the original Zen Browser Homepage Repository and submit a pull request:

1. Navigate to the repository you forked from.
2. Click on the "Pull Requests" tab.
3. Click on "New Pull Request" and select your branch.
4. Provide a clear and concise description of your changes.
5. Submit the pull request.

Your pull request will be reviewed by the maintainers, and you may be asked to make some adjustments. Once approved, your changes will be merged into the main branch.

## Additional Resources

- [Zen Browser Homepage Repository](https://github.com/zen-browser/www)
- [[desktop |  Contribution Guidelines]]
- [[CODE_OF_CONDUCT | Code of Conduct]]


---

Thank you for contributing to Zen Browser's homepage! Your contributions help make the project better for everyone.