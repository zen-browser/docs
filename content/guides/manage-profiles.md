---
title: Managing Firefox Profiles
lastmod: 2024-08-23
---

This [[guides/index|guide]] will give you a comprehensive understanding of Firefox profiles, helping you manage them effectively even in the most challenging situations. By following this guide, you'll learn how to preserve key elements of your browsing experience, including bookmarks, history, passwords, and more.

## Goal

This guide will help you:

- Keep bookmarks and history
- Keep passwords
- Keep logins
- Keep open tabs
- Keep your default search engine
- Preserve `about:config` settings
- Keep installed add-ons (but note that you may lose all add-on customizations)

## Steps to Follow

### 1. Open Your Current Profile Folder

1. Go to `about:support` in Firefox.
2. Under the "Application Basics" section, click on "Open Folder" next to "Profile Folder."

> [!IMPORTANT] **Turn Off Firefox**
> This step is crucial to avoid corruption, as Firefox continuously reads and writes data while running.

### 2. Copy Essential Files

After turning off Firefox, copy the following files from your profile folder:

- **places.sqlite**: Contains bookmarks and history.
- **cookies.sqlite**: Stores login sessions.
- **cert9.db + key4.db + logins.json**: Holds your saved passwords.
- **extension-preferences.json + extensions.json + extension-settings.json + extensions folder**: These files keep track of your installed add-ons (but not their custom settings).
- **search.json.mozlz4**: Stores your search engine preferences.
- **sessionCheckpoints.json + sessionstore.jsonlz4**: Saves your currently open tabs.
- **prefs.js**: Contains your `about:config` settings.

> [!NOTE] **Optional Files**
>
> - **storage folder**: If you want to keep add-on customizations (this may not work 100% of the time).
> - **chrome folder**: If you want to retain your interface customizations.

### 3. Create and Set Up a New Profile

1. Go to `about:profiles` in Firefox.
2. Click on "Create a New Profile."
3. Select a folder to store the new profile.
4. Launch Firefox with the new profile.
5. Go to `about:support` again and open the profile folder for the new profile.
6. **Turn off Firefox**.
7. Paste the files you copied earlier into the new profile folder.

> [!WARNING] **Incompatibility Error**
>
> If Firefox opens with an incompatibility error after pasting the files, go to the new profile folder and move the `compatibility.ini` file somewhere else.

### 4. Final Step: Set as Default Profile

After ensuring everything works correctly, go back to `about:profiles` and set the newly created profile as the default. This will make it your main profile moving forward.

By following these steps, you'll maintain a consistent and personalized browsing experience across different Firefox profiles.
