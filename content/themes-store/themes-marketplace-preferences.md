---
title: Themes Store Preferences ⚙️ 
---



The `preferences.json` file allows theme developers to define custom preferences that control the behavior and appearance of themes in the Zen Browser. Each preference is defined with a `property`, a `label`, a `type`, and optionally `options` (for dropdown preferences). The `preferences.json` file contains a list of these preference objects at its root.

## Preferences.json structure

### 1. **Property** Format

The `property` field is a string that should follow Firefox's preference naming schema, similar to `about:config` entries. The  `property` value can be any valid string that aligns with this schema.

For example:
- `theme.mytheme.background_color`
- `theme.mytheme.enable_dark_mode`


### Example Preferences

#### **1. Checkbox Preference**

```json
{
  "property": "theme.mytheme.enable_dark_mode",
  "label": "Enable dark mode",
  "type": "checkbox"
}
```

#### **2. Dropdown Preference**

```json
{
  "property": "theme.mytheme.background_color",
  "label": "Background color",
  "type": "dropdown",
  "options": [
    {
      "label": "Light",
      "value": "light"
    },
    {
      "label": "Dark",
      "value": "dark"
    },
    {
      "label": "Blue",
      "value": "blue"
    }
  ]
}
```

---

### Property Types and Accepted Values

| **Property**                              | **Type**   | **Accepted Values**                  |
|-------------------------------------------|------------|--------------------------------------|
| **Type:** `checkbox`                      | Boolean    | `true`, `false`                      |
| **Type:** `dropdown`                      | Array[Options]     | Each option's `value` must be a string or an integer. Example values: `"light"`, `"dark"`, `"blue"`, `1`, `2` |

---

### Detailed Explanation of Fields

#### 1. **label**
- **Description:** The `label` field is the description that will be visible in the Zen Browser configuration for the user to see.
- **Accepted Values:** It accepts a string. White spaces can be used.
  
Example:
```json title="Example" {2}
{
  "property": "theme.mytheme.enable_dark_mode",
  "label": "Enable dark mode",
  "type": "checkbox"
}
```

#### 2. **options**
- **Description:** The `options` field is an array of option objects, only available for the `dropdown` type.
- **Accepted Values:** This field must be an array containing one or more option objects.

```json title="Example" {5-14}
{
  "property": "theme.mytheme.background_color",
  "label": "Background color",
  "type": "dropdown",
  "options": [
    {
      "label": "Light",
      "value": "light"
    },
    {
      "label": "Dark",
      "value": "dark"
    }
  ]
}
```

#### 3. **option objects**
- **Description:** Each option object in the `options` array defines a possible value for the dropdown menu. It contains two fields: `label` and `value`.
- **Fields:**
  - **label:** A string displayed in the dropdown menu (can include white spaces).
  - **value:** The value that will be assigned as a CSS property. Only `string` or `int` values are valid. Strings cannot contain white spaces or special characters.

```json title="Example" {6-9}
{
  "property": "theme.mytheme.background_color",
  "label": "Background color",
  "type": "dropdown",
  "options": [
    {
      "label": "Light",
      "value": "light" // valid string
    },
    {
      "label": "Dark",
      "value": "dark" // valid string
    },
    {
      "label": "Blue",
      "value": 3 // valid integer
    }
  ]
}
```

Invalid Example:
```json
{
  "label": "Invalid option",
  "value": [] // invalid, only string/int are allowed
}
```

<details> 
  <summary><font weight="bold" size=4.75><b>See Full Example</b></font></summary>

Below is a full example of what a `preferences.json` file might look like with multiple preference objects in its root. Each object represents a preference defined for a theme:

```json
[
  {
    "property": "theme.mytheme.enable_dark_mode",
    "label": "Enable dark mode",
    "type": "checkbox"
  },
  {
    "property": "theme.mytheme.background_color",
    "label": "Background color",
    "type": "dropdown",
    "options": [
      {
        "label": "Light",
        "value": "light"
      },
      {
        "label": "Dark",
        "value": "dark"
      },
      {
        "label": "Blue",
        "value": "blue"
      }
    ]
  },
  {
    "property": "theme.mytheme.show_bookmarks_bar",
    "label": "Show bookmarks bar",
    "type": "checkbox"
  }
]
```

In this example:
- The `preferences.json` file contains a list of three preference objects.
- Each object defines a `property`, `label`, and `type` (either `checkbox` or `dropdown`).
- Dropdown preferences can include an `options` field, with each option having a `label` and a `value`.

</details>

---

## How to use preferences in the theme's CSS

Once you have defined your preferences in the `preferences.json` file, you can use them in your theme’s CSS to modify the appearance or behavior based on the user’s selections.

### 1. Using Checkbox Preferences `-moz-bool-pref`

Checkbox preferences can be detected in your CSS using the `-moz-bool-pref` media query, which evaluates the boolean value (`true` or `false`) of a checkbox preference.

For example, if you have a preference to enable dark mode in your theme:

```json
{
  "property": "theme.mytheme.enable_dark_mode",
  "label": "Enable dark mode",
  "type": "checkbox"
}
```

You can use the following CSS to change the background color when the dark mode preference is enabled:

```css {1}
@media (-moz-bool-pref: "theme.mytheme.enable_dark_mode") {
  body {
    background-color: #000;
    color: #fff;
  }
}
```

In this example:
- The background color changes to black, and the text color changes to white if the `enable_dark_mode` checkbox is checked (set to `true`).


### 2. Using Dropdown Preferences `body:has(#theme-<theme-name>[<attribute-name>="<value>"])`

> [!attention]
> In the theme's CSS file, the `property` defined in the `preferences.json`  using the `"dropdown"` type will be called exactly as defined, but with one key difference: **dots (`.`) in the `property` name are replaced with hyphens (`-`)**. For example: - `theme.mytheme.background_color` in the `preferences.json` file becomes `theme-mytheme-background_color` in the CSS file. This transformation ensures that the property can be used as an attribute selector or inside a media query.

For dropdown preferences, you can detect the selected value using the `:has()` CSS pseudo-class, which applies styles based on the selected attribute and value in the DOM.

For example, if you have a preference to select the background color from a dropdown menu:

```json
{
  "property": "theme.mytheme.background_color",
  "label": "Background color",
  "type": "dropdown",
  "options": [
    {
      "label": "Light",
      "value": "light"
    },
    {
      "label": "Dark",
      "value": "dark"
    },
    {
      "label": "Blue",
      "value": "blue"
    }
  ]
}
```

You can use the following CSS to change the background color based on the selected value:

```css {2,8,14}
/* Light background */
body:has(#theme-mytheme[theme-mytheme-background_color="light"]) {
  background-color: #fff;
  color: #000;
}

/* Dark background */
body:has(#theme-mytheme[theme-mytheme-background_color="dark"]) {
  background-color: #000;
  color: #fff;
}

/* Blue background */
body:has(#theme-mytheme[theme-mytheme-background_color="blue"]) {
  background-color: #001f3f;
  color: #fff;
}
```

In this example:
- The background color and text color change based on the value selected in the `background_color` dropdown.
- The selector `body:has(#theme-mytheme[background_color="value"])` checks the `background_color` attribute and applies the relevant styles based on the selected option.

---

<details> 
  <summary><font weight="bold" size=4.75><b>See Full Example</b></font></summary>

Suppose your `preferences.json` file includes these two preferences:

```json
[
  {
    "property": "theme.mytheme.enable_dark_mode",
    "label": "Enable dark mode",
    "type": "checkbox"
  },
  {
    "property": "theme.mytheme.background_color",
    "label": "Background color",
    "type": "dropdown",
    "options": [
      {
        "label": "Light",
        "value": "light"
      },
      {
        "label": "Dark",
        "value": "dark"
      },
      {
        "label": "Blue",
        "value": "blue"
      }
    ]
  }
]
```

You can combine the CSS like this:

```css
/* Checkbox for dark mode */
@media (-moz-bool-pref: "theme.mytheme.enable_dark_mode") {
  body {
    background-color: #000;
    color: #fff;
  }
}

/* Dropdown for background color selection */
body:has(#theme-mytheme[theme-mytheme-background_color="light"]) {
  background-color: #fff;
  color: #000;
}

body:has(#theme-mytheme[theme-mytheme-background_color="dark"]) {
  background-color: #000;
  color: #fff;
}

body:has(#theme-mytheme[theme-mytheme-background_color="blue"]) {
  background-color: #001f3f;
  color: #fff;
}
```

This allows users to:
- Toggle dark mode on/off using the checkbox.
- Select a background color from the dropdown, which dynamically changes the background and text colors based on the user's choice.

</details>

> [!info]
> The `-moz-bool-pref` query is used for detecting boolean values (checkboxes), while the `:has()` pseudo-class with attribute selectors is used for detecting the selected values of dropdowns.

---


# Operating system specific settings

Some preferences may require to be available only for some operating systems. For example, imagine you want an extension that hides the window's apllication buttons (minimize, maximize, close) on Windows and linux but not on macOS, because macos doesn't provide a way to clear them individually. You can use a prefix to specify the operating system the preference is available for.

The prefix is the operating system name in lowercase, followed by a `:`.

> [!info]
> If you want to use a negative condition, you can use the `!` character before the operating system name.

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