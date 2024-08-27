---
title: Themes Store Preferences ⚙️ 
---

When submitting a theme to the Zen Browser Themes Store, you can use custom preferences to define the theme's appearance and behavior. These preferences are stored in a JSON file named `preferences.json` and are located in the root directory of the theme.

The following is an example of a `preferences.json` file:

```json
{
  "uc.example-preference.enabled": "This is an example preference",
  "uc.example-preference.value": "This is an example value"
}
```

Preference's schema must be defined with a key-value pair. The key must be in the format of firefox's preference name schema and the value must be a string, describing the preference. Right now, the only supported preference value types are booleans but that might change.

## How to use preferences

Let's say you have a theme that changes the background color of the browser. You can create a preference to allow users to decide whether they want a light or dark background. Here's how you can define the preference in the `preferences.json` file:

```json
{
  "uc.theme.dark-background.enabled": "Enable dark background",
}
```

In the theme's CSS file, you can use the preference to change the background color. Here's an example:

```css
@media (-moz-bool-pref: "uc.theme.dark-background.enabled") {
  body {
    background-color: #000;
    color: #fff;
  }
}
```

This settings will appear on the preferences page of the theme in the Zen Browser settings. Users can enable or disable the preference to change the background color of the browser.

:::note
Other values such as strings or numbers may be supported in the future. For now, only booleans are supported.
:::
# Operating system specific settings

Some preferences may require to be available only for some operating systems. For example, imagine you want an extension that hides the window's apllication buttons (minimize, maximize, close) on Windows and linux but not on macOS, because macos doesn't provide a way to clear them individually. You can use a prefix to specify the operating system the preference is available for.

The prefix is the operating system name in lowercase, followed by a `:`.

:::note
If you want to use a negative condition, you can use the `!` character before the operating system name.
:::

Here's an example of a preference that is only available on Windows and Linux:

```json
{
  "!macos:uc.theme.hide-window-close.enabled": "Hide window close button",
  ...
}
```

or for another example:

```json
{
  "windows:uc.theme.change-this-only-for-windows.enabled": "Change this only for Windows",
}
```