---
title: Building Zen Browser
---

We've took the time to make building Zen Browser as easy as possible, independent of your operating system or technical knowledge. 

## Step 1: Clone the Project

First, you need to clone the Zen Browser repository to your local machine. This will create a local copy of the project that you can work on.

```bash
git clone https://github.com/zen-browser/desktop.git --recurse-submodules
cd desktop
```

- **`--recurse-submodules`**: This flag ensures that all submodules are cloned along with the main project. Zen Browser relies on several submodules, so this step is essential.

## Step 2: Install Dependencies

Once you have cloned the project, navigate to the project directory and install the necessary dependencies using npm:

```bash
npm i
```

This command will install all the packages listed in the `package.json` file, which are required for building and running Zen Browser.

## Step 3: Download and Bootstrap the Browser

To set up the browser, you need to download additional files and prepare the environment:

```bash
npm run init
```

This command handles all the necessary bootstrapping tasks, such as setting up configuration files and downloading essential resources.

## Step 4: Build the Browser

Now that everything is set up, you can build the browser:

```bash
npm run build
```

This command compiles the source code and creates the necessary files for running Zen Browser.

## Step 5: Run the Browser

After building the browser, you can start it using:

```bash
npm start
```

This command launches the browser, allowing you to see your changes in action.


> [!failure]
> We cannot provide support if a build fails. Please understand this before proceeding with the following steps.
