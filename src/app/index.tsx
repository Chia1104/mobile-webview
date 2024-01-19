import { useState, useCallback } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Button, Text, Input, View } from "tamagui";
import * as WebBrowser from "expo-web-browser";

const isUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch (e) {
    return false;
  }
};

const Index = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleOpenWithWebBrowser = useCallback(async () => {
    if (isUrl(url)) {
      setError("");
      await WebBrowser.openBrowserAsync(url);
      return;
    }
    setError("Invalid URL");
  }, [url]);
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "IsBe" }} />
      <View flexDirection="column" justifyContent="center" alignItems="center">
        <Text style={styles.text}>A simple demo to open a URL in browser</Text>
        <Input
          value={url}
          onChangeText={setUrl}
          placeholder="Enter URL"
          marginHorizontal={10}
          width={300}
        />
        <Text style={styles.error}>{error}</Text>
        <Button onPress={handleOpenWithWebBrowser} marginHorizontal={10}>
          Open in browser
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#888",
    fontSize: 18,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  error: {
    color: "red",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Index;
