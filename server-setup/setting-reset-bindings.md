---
layout: page
nav_order: 5
parent: SlimeVR setup
---

# Setting up the reset bindings

The SlimeVR Server has the following default key bindings:

- `CTRL+ALT+SHIFT+U` for Quick reset.
- `CTRL+ALT+SHIFT+Y` for Reset.

These keybindings can be configured by editing the following line of the `vrconfig.yml` file:

```yaml
keybindings: {reset: CTRL+ALT+SHIFT+Y, quickReset: CTRL+ALT+SHIFT+U}
```

If you want to be able to bind these to your controller, you will need an additional application such as [OVR Advanced Settings](https://store.steampowered.com/app/1009850/OVR_Advanced_Settings/).

### OVR Advanced Settings bindings

1. In the Windows Explorer window, enter `%appdata%\AdvancedSettings-Team\OVR Advanced Settings.ini` in **Address bar** and press Enter. Notepad with the `OVR Advanced Settings.ini` file contents should open.
1. Find the `keyboardOne` and `keyboardTwo` lines and replace them with the following lines:

   ```ini
   keyboardOne=^*>y ; CTRL+ALT+SHIFT+Y - Reset
   keyboardTwo=^*>u ; CTRL+ALT+SHIFT+U - Quick reset
   ```

   > **Note:** If you changed default SlimeVR Server key bindings, refer to [Keyboard Input Guide](https://github.com/OpenVR-Advanced-Settings/OpenVR-AdvancedSettings/blob/master/docs/keyboard_input_guide.md).

1. In SteamVR Dashboard, open OVR Advanced Settings and select **Bindings**. If you don't see the icon for OVR Advanced Settings on your dashboard, try running OVR Advanced Settings from your Steam library and check if the icon appeared on your dashboard.
1. In the opened window, select the **Misc** tab.
1. Double-click the plus sign near the desired button name to add a binding.
1. In the opened dialog window, select **BUTTON**.
1. Click **None** near the desired button action. To see more button actions, click **Show more**.
1. In the opened **Boolean Actions** window, select **Keyboard Shortcut One**.
1. Repeat previous two steps for **Keyboard Shortcut Two**.

<div class="video-container">
<iframe width="100%" height="auto" src="https://www.youtube.com/embed/KuCjmHBpH7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Notes

- If you reset your playspace (for example long pressing Oculus button on Quest), you will need to do a [tracker reset](#reset-trackers).
- SlimeVR Server uses [Java 11](https://adoptium.net/releases.html?variant=openjdk11&jvmVariant=hotspot).
- If you need the SlimeVR Steam driver you can find it [here](https://github.com/SlimeVR/SlimeVR-OpenVR-Driver/releases/latest/download/slimevr-openvr-driver-win64.zip).

*Created by Eiren, edited by adigyran#1121, CalliePepper#0666 and Emojikage#3095, styled by CalliePepper#0666. Videos created by ZRock35#9574*
