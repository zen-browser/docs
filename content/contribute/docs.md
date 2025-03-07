---
title: Getting Started with Documentation Contributions
draft: false
lastmod: 2024-08-26
---

This guide will help you get started with contributing to the documentation for Zen Browser. The documentation is crucial for helping users and developers understand and use the project effectively. We use Quartz v4 for generating the static documentation site, and we recommend using Obsidian as your Markdown editor for making contributions.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- [**Git**](https://git-scm.com/): Version control system to clone the repository and manage your code.
- [**Node.js**](https://nodejs.org/): Required for building the Quartz v4 site.
- [**npm**](https://www.npmjs.com/): Node package manager, which comes with Node.js.
- [**Obsidian**](https://obsidian.md/): A powerful Markdown editor recommended for editing and organizing documentation. _(Optional)_

## 1. Fork the Repository

1. Navigate to the [Zen Browser Documentation Repository](https://github.com/zen-browser/docs).
2. Click on the "Fork" button at the top right of the repository page to create a personal copy of the repository under your GitHub account.

## 2. Clone the Repository

Once you have forked the repository, clone it to your local machine using the following command:

```bash
git clone https://github.com/<your-username>/docs.git
cd docs
```

Replace `<your-username>` with your GitHub username.

## 3. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
```

This command installs all the necessary packages listed in the `package.json` file.

## 4. Open the Project in Obsidian

Open the cloned repository folder in Obsidian to begin editing:

1. Open Obsidian.
2. Click on "Open folder as vault" and select the folder containing the cloned repository.
3. You can now browse, edit, and add new Markdown files to the project.

## 5. Make Your Changes

You can now start editing the documentation. The project structure is as follows:

- **`content/`** - contains the Markdown files for the documentation.
- **`assets/`** - contains images and other static assets used in the documentation.
- **`data/`** - contains any additional data files needed for the documentation.

### Writing Guidelines

- Follow the existing structure and formatting conventions.
- Use clear and concise language.
- Include examples and code snippets where applicable.
- Ensure all links and references are accurate.

## 6. Preview the Documentation

To preview the documentation site locally, run the following command:

```bash
npx quartz build --serve
```

This command starts a local server and opens the documentation site in your default web browser. The site will automatically reload whenever you make changes to the Markdown files.

## 7. Commit and Push Your Changes

Once you are satisfied with your changes, commit them to your local repository:

```bash
git add .
git commit -m "Description of your changes"
```

Push your changes to your forked repository:

```bash
git push origin main
```

## 8. Create a Pull Request

After pushing your changes, go to the original Zen Browser Documentation Repository and submit a pull request:

1. Navigate to the repository you forked from.
2. Click on the "Pull Requests" tab.
3. Click on "New Pull Request" and select your branch.
4. Provide a clear and concise description of your changes.
5. Submit the pull request.

Your pull request will be reviewed by the maintainers, and you may be asked to make some adjustments. Once approved, your changes will be merged into the main branch.

## Additional Resources

- [Zen Browser Documentation Repository](https://github.com/zen-browser/docs)
- [Quartz v4 Documentation](https://quartz.jzhao.xyz/)
- [[CONTRIBUTING|  Contribution Guidelines]]
- [[CODE_OF_CONDUCT | Code of Conduct]]

---

Thank you for contributing to Zen Browser's documentation! Your contributions help users and developers understand and effectively use the project.
