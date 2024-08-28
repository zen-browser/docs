---
title: Frequently Asked Questions ❓
sidebar:
  order: 1
lastUpdated: 2024-08-28
---
Welcome to the Zen Browser FAQ section! Here, you'll find answers to common questions and helpful tips to enhance your experience with Zen Browser. If your question isn't covered here, feel free to explore our community forums [r/zen_browser](https://www.reddit.com/r/zen_browser) or reach out to the support team.

## Why can't Zen Browser play DRM-protected content?
:::danger[Important] 
This only affects Microsoft Windows
:::
:::note[What is DRM?]
[Digital Rights Management](https://wikipedia.org/wiki/Digital_rights_management) (DRM) is a technology used to control how digital content, such as videos and music, can be accessed and used. DRM is commonly used by streaming services to protect copyrighted content. When you try to play DRM-protected content, the website verifies if the necessary DRM software is available on your browser. Most browsers use [**Widevine**](https://www.widevine.com), a DRM technology developed by Google, to facilitate this.
:::
Zen Browser currently lacks DRM-support, because it does not have a Widevine license. Acquiring such a license requires the payment of large fees (at least $5,000). Acquiring this license is financially unresponsible for the developer of Zen. This means that DRM-protected media cannot be played in Zen Browser for the foreseeable future. If support grows and the developer receives sufficient funding, a Widevine license may be considered.

Feel free to support the funding of a Widevine license for Zen on [Ko-Fi](https://ko-fi.com/zen_browser) or [Patreon](https://www.patreon.com/zen_browser)!

<!-- :::note[Which Services Are Affected?]
Due to the lack of DRM support, you will not be able to stream content from the following services in Zen Browser:
- **HBO Max**
- **Netflix**
- **Spotify**
- **Disney+**
- **Amazon Prime Video**
- **Apple Music**
- **Google Play Movies & TV**
- **And possible other services that use DRM not listed here**
:::
 -->
:::note[Which Services Are Affected?]
<details>
Due to the lack of DRM support, you will not be able to stream content from the following services in Zen Browser:

- **HBO Max**
- **Netflix**
- **Spotify**
- **Disney+**
- **Amazon Prime Video**
- **Apple Music**
- **Google Play Movies & TV**
- **And possible other services that use DRM not listed here**

</details>
:::

:::tip[Alternative solutions]
* Use a browser that has a Widevine license, such as [**Mozilla Firefox**](https://www.mozilla.org/firefox/), when streaming DRM-protected content.
* Use the native desktop app for the service you want to use
:::

## How do I know Zen is safe?

Zen Browser is designed with a focus on security and privacy. Additionally, the browser's codebase is derived from Firefox, a well-known and trusted open-source project. Users can verify the safety of the browser by reviewing the source code available on [GitHub](https://github.com/zen-browser/desktop) . Regular updates and community engagement also contribute to its security.

## How can I support Zen?

If you'd like to support the development of Zen Browser, you can do so through their official donation platforms. Contributions help the small team continue improving the browser and adding new features. You can support Zen Browser in the following ways:

- **Patreon**: Visit [https://www.patreon.com/zen_browser](https://www.patreon.com/zen_browser) to make recurring donations and gain access to updates and possible rewards.
- **Ko-fi**: You can also support Zen Browser with one-time donations via [https://ko-fi.com/zen_browser](https://ko-fi.com/zen_browser).

Your support helps the team maintain and enhance Zen Browser for everyone!

## "Zen Browser is damaged and can't be opened" on macOS
If you encounter the message "Zen Browser is damaged and can't be opened" on macOS, it is because Zen Browser is not signed with an official Apple Developer License. This triggers the Gatekeeper security feature, which prevents unsigned or unverified apps from running.

If you encounter this error please follow our [Installing Zen Browser on MacOS](/guides/install-macos/) guide

## How does the Split View feature work?

:::tip[Use shortcuts to perform Split View actions faster!]
:::
1. Select multiple tabs by left-clicking them while holding the `Ctrl` key
2. Right click a tab, and select `Split x Tabs`
3. Change the view mode by pressing the 🔗 button in the top address bar

<video controls>
  <source src="/split-tabs.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> 

## How to switch tabs by scrolling?
You can to enable this feature by changing a setting in the browser's configuration. Here's how:

1. Open the `about:config` page. This page contains advanced settings for the browser.
2. Search for `toolkit.tabbox.switchByScrolling`
3. Toggle the setting to `true` by double-clicking on it

Once this setting is enabled, you can hover your mouse over the tab bar and use your mouse wheel to scroll through the tabs, making it easier to navigate between them.

## Where do I recommend features?

If you want to recommend features or report an issue, you can do so on the browser's GitHub page. Before submitting your request, it's mandatory to check if the issue or feature has already been reported. You can do this by searching through existing issues on the [GitHub issues page](https://github.com/zen-browser/desktop/issues).

Keep in mind that the Zen Browser team is currently very small, so it might take some time for your request to be reviewed and addressed. The team is dedicated to improving the browser, but with limited resources, they prioritize the most critical and popular requests. Your patience and thoroughness in reporting can help make Zen Browser better for everyone.

## How can I sync my data across multiple devices?

Zen Browser integrates with Firefox Sync, allowing you to sync your addons, bookmarks, history, passwords, and other browser data across multiple devices. To enable Firefox Sync in Zen Browser:

1. **Open the Zen Browser Settings**
2. **Navigate to the "Sync" tab**
3. **Sign in with your Mozilla Account.** (If you don't have an account, you'll need to create one)
4. **Select what data you wish to sync**

After signing in and selecting your preferences, your data will be synced across all devices where you are signed in with the same Mozilla account.