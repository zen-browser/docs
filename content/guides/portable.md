---
title:  Making Zen Browser Portable on Windows
---


This [[guides/index|guide]] will hlep you creating a portable version of Zen Browser, it is straightforward. You just need to create a shortcut with the `-P` option for Zen Browser, and then you can open it normally, set it as the default browser, and pin it to the Taskbar.

>[!tip]
> By making Zen Browser portable, you can carry your personalized browser environment with you on a USB drive or between different Windows systems.

## Step 1: Download Zen Browser

1. Download the original Zen Browser from the official [Zen Browser GitHub Repository](https://github.com/zen-browser/desktop/releases).
2. After downloading, you will have a file named something like `Zen-Browser-Setup-xxx.exe`.

## Step 2: Extract the Installer

1. Right-click on the `Zen-Browser-Setup.exe` file.
2. Select "Extract" using WinRAR or 7-Zip.
3. Once extracted, go into the extracted folder.

## Step 3: Copy the Core Files

1. Find the `core` folder inside the extracted files.
2. Copy the `core` folder to any location of your choice.
3. Rename this folder to `ZenBrowser` (or any name you prefer).

## Step 4: Create a Portable Profile

1. Open the `ZenBrowser` folder you just created.
2. In the Explorer address bar, type `CMD` and press Enter to open the Command Prompt in this directory.
3. In the Command Prompt, type `zenbrowser.exe -P` and press Enter. This will open the Profile Management window.
4. Click on **Create Profile...** and select a folder where the portable profile will be stored. It’s recommended to create this profile in the same folder as `zenbrowser.exe` for portability.
5. Follow the prompts to complete profile creation.

## Step 5: Start Zen Browser

1. Once the profile is created, you can start Zen Browser by running `zenbrowser.exe` with the `-P` option.
2. Your Zen Browser is now fully portable and can be moved between different systems while retaining your settings, extensions, and bookmarks.
