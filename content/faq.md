---
title: Frequently Asked Questions ❓
---
Welcome to the Zen Browser FAQ section! Here, you'll find answers to common questions and helpful tips to enhance your experience with Zen Browser. If your question isn't covered here, feel free to explore our community forums [r/zen_browser](https://www.reddit.com/r/zen_browser) or reach out to the support team.

>[!faq]-  ## **Why Can't Zen Browser Play DRM-Protected Content?**
>#### What is DRM?
>DRM (Digital Rights Management) is a technology used to control how digital content, such as videos and music, can be accessed and used. DRM is commonly used by streaming services to protect copyrighted content. When you try to play DRM-protected content, the website checks if the necessary DRM software is available on your browser. Most browsers use **Widevine**, a DRM technology developed by Google, to facilitate this.
>#### Why Zen Browser Doesn't Support DRM
>Zen Browser currently does not support DRM because it does not have a Widevine license. Acquiring such a license requires payment of significant fees—typically at least $5,000 USD. As Zen Browser is an open-source project focused on privacy and security, the developers have decided not to pursue a Widevine license. This decision allows the project to maintain its open-source and non-commercial nature, but it means that DRM-protected content cannot be played in Zen Browser.
>#### Which Services Are Affected?
>Due to the lack of DRM support, you will not be able to stream content from the following services in Zen Browser:
>- **HBO Max**
>- **Netflix**
>- **Tidal**
>- **Spotify**
>- **Disney+ Hotstar**
>- **Amazon Prime Video**
>- **Apple Music**
>- **Google Play Movies & TV**
>#### How to Play DRM-Protected Content
>If you need to access DRM-protected content, the recommended solution is to use a browser that has a Widevine license, such as:
>- **Mozilla Firefox**
>- **Google Chrome**
>- **Microsoft Edge**
>  
>These browsers are equipped to handle DRM-protected content, ensuring that you can stream videos and music from the services listed above.
>#### Alternative Solutions
>If you prefer to keep using Zen Browser for general browsing, consider using one of the above browsers specifically for streaming DRM-protected content. This way, you can benefit from Zen Browser's privacy features while still accessing the content you need.


## **How do I know Zen is safe?**

Zen Browser is designed with a focus on security and privacy. Additionally, the browser's codebase is derived from Firefox, a well-known and trusted open-source project. Users can verify the safety of the browser by reviewing the source code available on [GitHub](https://github.com/zen-browser/desktop) . Regular updates and community engagement also contribute to its security.

## **How can I support Zen?**

If you'd like to support the development of Zen Browser, you can do so through their official donation platforms. Contributions help the small team continue improving the browser and adding new features. You can support Zen Browser in the following ways:

- **Patreon**: Visit [https://www.patreon.com/zen_browser](https://www.patreon.com/zen_browser) to make recurring donations and gain access to updates and possible rewards.
- **Ko-fi**: You can also support Zen Browser with one-time donations via [https://ko-fi.com/zen_browser](https://ko-fi.com/zen_browser).

Your support helps the team maintain and enhance Zen Browser for everyone!

## **"Zen Browser is damaged and can't be opened" on MacOS**
If you encounter the message "Zen Browser is damaged and can't be opened" on macOS, it is likely because Zen Browser is not signed with an official Apple Developer License. This triggers macOS's Gatekeeper security feature, which prevents unsigned or unverified apps from running.
*If you encounter this error please follow our [[install-macos | Installing Zen Browser on MacOS]] guide*

## **How to switch tabs by scrolling?**
To switch tabs by scrolling in Zen Browser, you need to enable this feature by changing a setting in the browser's configuration. Here's how you can do it:

1. **Open the `about:config` page**: Type `about:config` in the address bar and press Enter. This page contains advanced settings for the browser.
2. **Search for `toolkit.tabbox.switchByScrolling`**: In the search bar on the `about:config` page, type `toolkit.tabbox.switchByScrolling`.
3. **Change the setting to `true`**: When the setting appears, double-click on it to toggle the value from `false` to `true`.

Once this setting is enabled, you can hover your mouse over the tab bar and use your mouse wheel to scroll through the tabs, making it easier to navigate between them.

## **Where do I recommend features?**

If you want to recommend features or report an issue in Zen Browser, you can do so via the browser's GitHub page. Before submitting your request, it's mandatory to first check if the issue or feature has already been reported. You can do this by searching through existing issues on the [GitHub issues page](https://github.com/zen-browser/desktop/issues).

Keep in mind that the Zen Browser team is currently very small, so it might take some time for your request to be reviewed and addressed. The team is dedicated to improving the browser, but with limited resources, they prioritize the most critical and popular requests. Your patience and thoroughness in reporting can help make Zen Browser better for everyone.

## **How can I sync my data across multiple devices?**

Zen Browser integrates with Firefox Sync, allowing you to sync your bookmarks, history, passwords, and other browser data across multiple devices. To enable Firefox Sync in Zen Browser:

1. **Open Zen Browser Settings**: Go to `about:preferences` or click on the settings icon.
2. **Navigate to the "Sync" tab**: In the settings menu, find the "Sync" tab where you can manage sync options.
3. **Sign in with your Firefox Account**: If you don't have an account, you'll need to create one. Once signed in, you can choose what data you want to sync.
4. **Start Syncing**: After signing in and selecting your preferences, your data will be synced across all devices where you have Zen Browser installed and signed in with the same Firefox account.

This feature ensures that your browsing experience remains consistent across different devices, making it easy to pick up where you left off.