import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Button, Text } from "tamagui";

const Index = () => {
  return (
    <SafeAreaView>
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home" }} />
      <View>
        <Text style={styles.text}>Hello World !</Text>
        <Button>Click me</Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#888",
    fontSize: 18,
  },
});

export default Index;
