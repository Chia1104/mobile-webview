// import "../global.css";
import { memo, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "@tamagui/core/reset.css";
import { TamaguiProvider, createTamagui } from "tamagui";
import { config } from "@tamagui/config/v2";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const tamaguiConfig = createTamagui(config);

// this makes typescript properly type everything based on the config
type Conf = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayoutNav = () => {
  return (
    <SafeAreaProvider>
      {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f472b6",
          },
        }}
      />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default memo(function RootLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <RootLayoutNav />
    </TamaguiProvider>
  );
});
