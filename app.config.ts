import type { ExpoConfig } from "expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "mobile-webview",
  slug: "mobile-webview",
  scheme: "mobile-webview",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "chia1104.com.mobileWebview",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1F104A",
    },
    package: "chia1104.com.mobileWebview",
  },
  extra: {
    eas: {
      projectId: "5c5e7850-ca8b-49c0-b022-9677388999e2",
    },
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  plugins: [
    [
      "expo-router",
      {
        root: "./src/app",
      },
    ],
  ],
});

export default defineConfig;
