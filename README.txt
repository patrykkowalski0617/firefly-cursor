# Firefly Cursor 🌟

**Firefly Cursor** is a browser extension (Manifest V3) that adds an organic, glowing "firefly" effect to your cursor. 
Under of a static pointer, you get a dynamic glow that reacts to movement, "breathes" and bursts into color upon clicking.

## ✨ Key Features

* **Breathing Animation:** A smooth, pulsating light effect that makes the cursor feel alive.
* **Micro-drift:** An animation that mimics the natural, erratic drifting of a firefly.
* **Click Interaction:** Dynamic color shifts and intensity bursts whenever you click.
* **Full Customization:** A dedicated options panel to tweak every visual aspect.
* **Disabled when fullscreen is on:** Automatically disabled on fullscreen mode.

* **The best for native dark mode pages**

## 🛠 Configuration & Customization

The extension includes a React-powered options UI (`options.html`) where you can adjust:

| Option | Description |
| :--- | :--- |
| **Size** | Adjusts the radius of the glow around the cursor. |
| **Micro Motion Range** | Controls how far the "firefly" drifts from the actual pointer position. |
| **Breath Speed** | Changes the frequency of the pulse animation. |
| **Opacity** | Sets the opacity level of the effect. |
| **Click Color Intensity** | Determines how vivid the colors become during a click event. |
| **Temperature** | Shifts the color palette (from cold blues into white to warm embers/reds). |
| **Follow Cursor Delay** | Adds a slight physics-based lag (inertia) for a more organic feel. |

## 🚀 Technical Stack

* **Vite:** High-performance bundler used for building the extension.
* **React:** Powers the interactive Settings/Options UI.
* **CSS Keyframes:** Heavy use of hardware-accelerated animations for the `micro-drift` effect.
* **Manifest V3:** Fully compliant with the latest Chrome extension standards.
* **Vite Static Copy:** Efficiently manages assets like `manifest.json`, icons, and global styles.

## 📦 Installation & Development

### Prerequisites
* Node.js
* npm or yarn

### Build Instructions
1.  **Clone the repository and install dependencies:**
    ```bash
    npm install
    ```
2.  **Build the production package:**
    ```bash
    npm run build
    ```
    The compiled extension will be generated in the `dist/` directory.

### Loading into Browser
1.  Open your browser and navigate to `chrome://extensions/`.
2.  Enable **Developer mode** (usually a toggle in the top right).
3.  Click **Load unpacked** and select the `dist/` folder from this project.

## 📂 Project Structure

* `manifest.json` – Extension metadata, permissions (`storage`), and content script definitions.
* `vite.config.js` – Build configuration, including entry points for the Options page and Content scripts.
* `src/content/` – Contains the logic and `content-style.css` injected into websites.
* `src/options/` – The React source code for the user settings dashboard.