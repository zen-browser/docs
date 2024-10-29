---
title: Getting Started with Desktop Browser Development
draft: false
lastmod: 2024-10-25
---

Contributing to the Zen Browser Desktop project is a great way to get involved with open-source software development. This guide will walk you through the steps to clone the project, set up your development environment, make contributions, and submit pull requests.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- [**Git**](https://git-scm.com/): Version control system to clone the repository and manage your code.
- [**Node.js**](https://nodejs.org/): Required for building the browser.
- [**npm**](https://www.npmjs.com/): Node package manager, which comes with Node.js.
- [**MozillaBuild**](https://wiki.mozilla.org/MozillaBuild): Meta-installer required to build the browser.
- [**Mercurial/TortoiseHg**](https://www.mercurial-scm.org/downloads): Required by Mozilla scripts, with its install directory added to PATH.
- [**Python**](https://www.python.org/): Required by build scripts, with its install directory added to PATH.

## Run Locally

Clone the project

```bash
git clone --depth 1 https://github.com/zen-browser/desktop.git
cd desktop
git submodule update --init --recursive --depth 1
```

Install dependencies

```bash
npm i
```

Download and bootstrap the browser

```bash
npm run init
```

Run bootstrap to identify and fix potential errors

```bash
npm run bootstrap
```

Copy a language pack
```bash
sh scripts/update-en-US-packs.sh
```

Start building the browser

```bash
npm run build
```

Finally, run the browser!

```bash
npm start
```

### Limiting CPU Usage During Build

On Linux, you can use cpulimit to restrict CPU usage of intensive build processes:

```bash
# Limit by process name
cpulimit -e rustc -l 50  # Limits rustc to 50% CPU
cpulimit -e clang -l 50  # Limits clang to 50% CPU

# Or limit by PID
cpulimit -p PID -l 50
```

On Windows, use Process Lasso or Process Hacker to set CPU affinity and priority:
1. Open Process Lasso/Process Hacker
2. Find rustc.exe or clang.exe processes
3. Right click -> Set CPU Affinity/Priority


## Making a Contribution

#### 1. Fork the Repository

#### 2. Create a New Branch
It’s a good practice to create a new branch for each feature or bug fix.

```bash
git checkout -b feature/your-feature-name
```

#### 3. Make Your Changes
Edit the code in your local repository.
- Ensure that your changes do not break existing functionality.
- Write tests if applicable.

You can test your changes by
- [[live-editing | Editing the interface CSS in real-time]]
- [[building| Building the browser]]

#### 4. Commit Your Changes
Commit your changes with a descriptive message.

```bash
git commit -m "Add feature: your feature description"
```

#### 5. Push Your Changes
Push your branch to your forked repository.

```bash
git push origin feature/your-feature-name
```

#### 6. Submit a Pull Request
Go to the original Zen Browser repository and submit a pull request from your forked repository.

- Provide a clear title and description of your changes.
- Reference any relevant issues in the pull request.

## Additional Resources

- [Zen Browser Repository](https://github.com/zen-browser/desktop)
- [[CONTRIBUTING|  Contribution Guidelines]]
- [[CODE_OF_CONDUCT | Code of Conduct]]
- [Searchfox](https://searchfox.org/)  a source code indexing tool for Mozilla Firefox
- [MDN Web Docs](https://developer.mozilla.org/)  a documentation repository and learning resource for web developers

---

Thank you for contributing to Zen Browser! Your contributions are valuable and help make the project better for everyone.
