---
title: Installing Zen Browser on macOS
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

![Open DMG File](https://private-user-images.githubusercontent.com/103985728/348454221-d3a3a845-245e-4154-b6b2-941f4d021bee.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQyMTQ4MDEsIm5iZiI6MTcyNDIxNDUwMSwicGF0aCI6Ii8xMDM5ODU3MjgvMzQ4NDU0MjIxLWQzYTNhODQ1LTI0NWUtNDE1NC1iNmIyLTk0MWY0ZDAyMWJlZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgyMVQwNDI4MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MGE2ZDJlZTY1ZDlmZjkxMTUwOTVjZjM5ZTFkZTEwYTRiZThkOTk5MWRjZDBkODIyNzllMGZiYTcyNjI1NTEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.uvjigkIMz7jWA7MVBu777aZ3wODclZxRUt3XEWs5J8g)

## Step 2: Install Zen Browser

- Drag the Zen Browser icon to the Applications folder.

## Step 3: Bypass Gatekeeper

Upon trying to open Zen Browser, you may encounter a message indicating the file is damaged. This happens because the app does not have a valid developer signature and is using an Ad-hoc sign.

![Bypass Gatekeeper](https://private-user-images.githubusercontent.com/103985728/348454366-298f06af-772b-460d-9e71-65f6c99e8341.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQyMTQ4MDEsIm5iZiI6MTcyNDIxNDUwMSwicGF0aCI6Ii8xMDM5ODU3MjgvMzQ4NDU0MzY2LTI5OGYwNmFmLTc3MmItNDYwZC05ZTcxLTY1ZjZjOTllODM0MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgyMVQwNDI4MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMjMyMjY1YmY0YzM4YjgxOGU3MDA2OTAzMWQ3MWYxMDY1NDliYTJlODAwNDkzZTU4YTE5YjNkN2NmYzNiNzVjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.TEy9CZlZJA3jta4Ueuqbu_83M7NdaVtbbqwmlVx3Dhg)

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