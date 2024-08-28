---
title: Live Editing Zen Theme
---

This [[guides/index|guide]] will help you customize the appearance of Zen Browser by live editing the `userChrome.css` file. Follow the steps below to start customizing your browser's theme.

## Step 1: Access the Profile Folder

1. Open Zen Browser.
2. Type `about:support` in the address bar and press Enter.
3. Look for the **Application Basics** section.
4. Click on **Open Profile Folder**. This will open the folder where Zen Browser stores your user data.

## Step 2: Create the `chrome` Folder

1. In the Profile Folder, create a new folder and name it `chrome`.
2. Inside the `chrome` folder, create a new blank file named `userChrome.css`.

## Step 3: Open Style Editor in Zen Browser

1. In Zen Browser, press `Ctrl + Shift + Alt + I` to open the Developer Tools.
2. Navigate to the **Style Editor** tab.
3. In the filter/search bar, type `userChrome` to locate the `userChrome.css` file you created earlier.

>[!info] Enable Browser Developer Tools 
>After Zen Browser version `1.0.0-a.31` the Browser Developer Tools is **disabled** by default for security.
>1. Open the `about:config` page. This page contains advanced settings for the browser.
>2. Search for `devtools.debugger.remote-enabled`
>3. Toggle the setting to `true` by double-clicking on it


## Step 4: Edit the `userChrome.css` File

1. The `userChrome.css` file should now be visible in the Style Editor.
2. You can start editing the file directly within the Style Editor.
	 - **Note:** You can use the **Inspect** button  ![[inspect.png]] to hover over and select elements on the page. This allows you to learn about the `id`, `class`, or other attributes of elements, which you can then target in your `userChrome.css` file.
1. To apply your changes, save the file by clicking **Save** or by pressing `Ctrl + S`.

> [!tip]
>  If a style does not apply as expected, try adding the `!important` keyword at the end of the CSS rule. This forces the browser to apply the style regardless of any other existing styles.

> [!Notes] 
>Any changes you make to the `userChrome.css` file will be applied immediately to Zen Browser.
>Use this file to customize various UI elements, such as colors, fonts, and layout.
>You can use this guide to help you [[themes-marketplace| create your Zen theme and publish it.]]

---

This guide is designed to help you quickly and efficiently customize your Zen Browser experience. Happy theming!
