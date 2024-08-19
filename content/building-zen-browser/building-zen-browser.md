---
title: Building Zen Browser 📦
---

> [!failure]
> We cannot provide support if a build fails. Please understand this before proceeding with the following steps.

We've took the time to make building Zen Browser as easy as possible, independent of your operating system or technical knowledge. 

1. Clone the repository

```bash
git clone https://github.com/zen-browser/desktop.git
cd desktop
```

2. Install dependencies

```bash
npm install
```

3. Download and bootstrap the browser

```bash
npm run init
```

4. Start building the browser

> [!info]
> This may take a while, depending on your internet connection and computer speed.

```bash
npm run build
```

5. Start the browser!

```bash
npm start
```