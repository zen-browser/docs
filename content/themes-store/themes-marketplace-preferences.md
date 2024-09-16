---
title: Themes Store Preferences ⚙️ 
---



The `preferences.json` file allows theme developers to define custom preferences that control the behavior and appearance of themes in the Zen Browser. Each preference is defined with a `property`, a `label`, a `type`, and optionally `options` (for dropdown preferences). The `preferences.json` file contains a list of these preference objects at its root.



## Theme Preferences

### Preference Types

| **Property**                              | **Type**   | **Accepted Values**                  |
|-------------------------------------------|------------|--------------------------------------|
| `checkbox`                      | Boolean    | `true`, `false`                      |
| `dropdown`                      | Array[Options]     | The `value` of an option must be a string (`"blue"`) or an integer (`1`)|


### Checkbox preferences
```json title="Checkbox Example"
{
  "property": "theme.mytheme.enable_dark_mode",
  "label": "Enable dark mode",
  "type": "checkbox"
}
```

#### Properties

The `property` field is a string that should follow Firefox's preference naming schema, similar to `about:config` entries. The  `property` name can be any valid string that aligns with this schema.

For example: `theme.mytheme.background_color`
#### Labels
The `label` field is the description that will be visible to users in the Zen Mods settings page. 
This field accepts a string and allows white space.

---

### Dropdown preferences
```json title="Dropdown Example"
{
  "property": "theme.mytheme.background_color",
  "label": "Background color",
  "type": "dropdown",
  "options": [
    {
      "label": "Green",
      "value": "green"
    },
    {
      "label": "Blue",
      "value": "blue"
    }
  ]
}
```

Dropdown preferences also contain property and label fields. What separates dropdown menus from checkboxes is that they allow multiple options. 

The `options` field is an array of option objects, only available for the `dropdown` type. This field must be an array containing one or more option objects.

```json
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
```

Each option object defines a possible value for the dropdown menu. It contains two fields: `label` and `value`.

* The `label` is the description that will be displayed in the dropdown menu. This field accepts a string and allows white space.
* The `value` field contains the value that will be assigned as a CSS property. Only `string` or `int` values are valid. Strings may not contain white space or special characters.

```json title="Example" 
{
    "label": "Green",
    "value": "green" // valid string
}
```

```json title="Invalid Example" {3}
{
  "label": "Invalid option",
  "value": [] // invalid, only string/int are allowed
}
```

---

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
        "label": "Green",
        "value": "green"
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

## Using preferences in the theme's CSS

Once you have defined your preferences in the `preferences.json` file, you can use them in your theme’s CSS to modify the appearance or behavior based on the user’s selections.

### Checkbox Preferences

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

You can also have negative conditions
```css
@media not (-moz-bool-pref: "theme.mytheme.enable_dark_mode")
```


### Dropdown Preferences

> [!attention]
> `property` fields defined in `preferences.json` using the `"dropdown"` type will have one key difference when used in your themes CSS: **dots (`.`) in the `property` name are replaced with hyphens (`-`)**. 
>
> E.g. `theme.mytheme.background_color` becomes `theme-mytheme-background_color` in the CSS file. 
> This transformation ensures that the property can be used as an attribute selector or inside a media query.

For dropdown preferences, you can detect the selected value using the `:has(){:css}` CSS pseudo-class, which applies styles based on the selected attribute and value in the DOM.

For example, if you have a preference to select the background color from a dropdown menu:

```json
{
  "property": "theme.mytheme.background_color",
  "label": "Background color",
  "type": "dropdown",
  "options": [
    {
      "label": "Green",
      "value": "green"
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
/* Green background */
body:has(#theme-mytheme[theme-mytheme-background_color="green"]) {
  background-color: #008000;
  color: #000;
}

/* Blue background */
body:has(#theme-mytheme[theme-mytheme-background_color="blue"]) {
  background-color: #0000ff;
  color: #fff;
}
```

In this example:
- The background color and text color change based on the value selected in the `background_color` dropdown.
- The selector `body:has(#theme-mytheme[background_color="value"]){:css}` checks the `background_color` attribute and applies the relevant styles based on the selected option.

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
        "label": "Green",
        "value": "green"
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
body:has(#theme-mytheme[theme-mytheme-background_color="green"]) {
  background-color: #008000;
  color: #000;
}

body:has(#theme-mytheme[theme-mytheme-background_color="blue"]) {
  background-color: #0000ff;
  color: #fff;
}
```

This allows users to:
- Toggle dark mode on/off using the checkbox.
- Select a background color from the dropdown, which dynamically changes the background and text colors based on the user's choice.

</details>

---


## Operating system specific settings

Some CSS modifications may not function properly on all operating systems. You can use a prefix to specify what operating system the preference should be available for.

The prefix is the operating system name in lowercase, followed by a colon (`:`)

> [!info]
> If you want to use a negative condition, you can use the `!` operator before the operating system name.

For example

```json
{
  "!macos:theme.mytheme.not-macos": "Apply for Linux and Windows",
  ...
}
```

```json
{
  "windows:theme.mytheme.windows-only": "Apply for Windows",
}
```