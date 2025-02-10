import { defineConfig, defineRunnerConfig } from 'wxt';
import tailwindcss from 'tailwindcss';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  manifest: {
    permissions: ["sidePanel", "commands"],
    commands: {
      "open-popup": {
        suggested_key: {
          default: "Ctrl+Shift+O",
          windows: "Ctrl+Shift+O",
          mac: "Command+Shift+O",
        },
        description: "Open the popup",
      },
    }
  },
  dev: {
    server: {
      port: 5173,
    }
  },
  // change this to "false" if you want a chrome window to auto-open
  // otherwise you'll have to load the extension manually via the .output folder at the root of the project which can be hidden (windows does not hide it but macOS does[need command + shift + . to show the hidden .output folder]) 
  runner: defineRunnerConfig({
    disabled: false
  }),
});
