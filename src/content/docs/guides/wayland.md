---
title: Handling Zen Browser Crashes on Linux with Wayland
---


This guide  addresses a known issue where Zen Browser may crash randomly or repeatedly on Linux systems using Wayland. While this issue primarily affects Linux users, particularly on Wayland, it's important to note that the problem is upstream and is expected to be fixed in Firefox 130. This guide also provides steps to work around the issue for users who installed Zen via different package managers or Flatpak.

:::note 
This issue is expected to be resolved in Firefox 130. Once Zen Browser updates to this version, the problem should be fixed, and the workaround described below will no longer be necessary.
:::

## Steps to Mitigate Crashes

### For Package Manager Installations

If you installed Zen Browser via a package manager (e.g., `yay`, `paru`, `nix`, etc.), you can try the following:

1. **Edit the Menu File**:
   - Use a menu editor (e.g., `libre-menu-editor`) to edit the Zen Browser menu file.
   - Add the following environment variable at the beginning of the command:

     ```bash
     MOZ_ENABLE_WAYLAND=0
     ```

### For Flatpak Installations

If you installed Zen Browser via Flatpak (e.g., GNOME Software, KDE Discover, flatpak command, etc.), there are a few options you can try:

1. **Apply the Environment Variable**:
   - Run the following command to set the environment variable, but be aware that results may vary:

     ```bash
     flatpak override --user --env MOZ_ENABLE_WAYLAND=0 io.github.zen_browser.zen
     ```

   - Alternatively, you can use Flatseal to set the environment variable:
     - Open Flatseal.
     - Click the plus icon next to **Variables**.
     - Enter `MOZ_ENABLE_WAYLAND=0`.

2. **Disable Wayland Support Entirely**:
   - If the above steps don't resolve the issue, you may need to disable Wayland support completely. Run the following command:

     ```bash
     flatpak override --user \
       --nosocket=wayland \
       --nosocket=fallback-x11 \
       io.github.zen_browser.zen
     ```

   - Alternatively, using Flatseal:
     - Disable the **Wayland windowing system** and **Fallback to X11 windowing system** under the **Socket** section.

## Conclusion

If you're experiencing crashes with Zen Browser on Linux using Wayland, the steps above should help mitigate the issue until an upstream fix is released in Firefox 130. We appreciate your patience and feedback as we track and address this issue.

For any further assistance or to report new issues, feel free to reach out to the Zen Browser community.

---
Thanks to [eagerestwolf](https://github.com/eagerestwolf) for creating this guide

Original Post: [Issue #296](https://github.com/zen-browser/desktop/issues/296)