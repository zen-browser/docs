---
title: Installing Zen Browser on MacOS
description: This guide provides step-by-step instructions for installing Zen Browser on macOS, including how to bypass macOS Gatekeeper due to the lack of an official Developer License. It also  explains how users can support the Zen Browser team by donating towards obtaining a Developer License.
---
> [!question]-  Why Bypassing Gatekeeper is Necessary
> Zen Browser currently requires users to bypass macOS Gatekeeper because the app does not have a Developer License from Apple. This license, which costs 100 euros annually, is necessary for official app signing and distribution. Unfortunately, due to limited resources, it is not within the Zen Browser team's ability to purchase this license at the moment.
> If you'd like to help Zen Browser obtain a Developer License and improve the installation experience, you can make a donation. Contributions will directly support the team in reaching this goal.
> - **Patreon**: [https://www.patreon.com/zen_browser](https://www.patreon.com/zen_browser)
> - **Ko-fi**: [https://ko-fi.com/zen_browser](https://ko-fi.com/zen_browser)

## Step 1: Download the Latest Version

- Download the latest Zen Browser DMG.
- Once downloaded, open the DMG file. You might need to zoom out a bit to see everything.

![[open-dmg.png]]

## Step 2: Install Zen Browser

- Drag the Zen Browser icon to the Applications folder.

## Step 3: Bypass Gatekeeper

Upon trying to open Zen Browser, you may encounter a message indicating the file is damaged. This happens because the app does not have a valid developer signature and is using an Ad-hoc sign.

![[gatekeeper.png]]

### To bypass this warning:

1. *Open Terminal.*
2. Run one of the following commands:

   - To bypass Gatekeeper for the current installed version:
     ```bash
     xattr -c '/Applications/Zen Browser.app/'
     ```
   - To bypass Gatekeeper for all versions of the app:
     ```bash
     xattr -d com.apple.quarantine '/Applications/Zen Browser.app/'
     ```

3. After running the command, if successful, Terminal will return a blank line.
  ![[blank space.png]]

## Step 4: Open Zen Browser

- Open Zen Browser from the Applications folder.
- Complete the onboarding process.
- If you use Little Snitch (LS), accept or block any connections as needed. For a browser, it is generally not recommended to block connections other than telemetry.

## Step 5: Restart Zen Browser

At the time of writing, there seems to be a bug with Zen Browser where the menu might not display correctly on the initial start. To fix this, quit Zen Browser (`⌘Q`) and reopen it.

![[broken-menu.png]]
![[fixed menu.png]]

You should now have a fully functional Zen Browser on your macOS. If you need to uninstall Zen, you can use Pearcleaner.

---
Thanks to [SenpaiHunters](https://github.com/SenpaiHunters) for creating this guide

Original Post: [Issue #53](https://github.com/zen-browser/desktop/issues/53)