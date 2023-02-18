import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

//import Camera from "./components/scanCamera";

function camera() {
  const devices = useCameraDevices("wide-angle-camera");
  const device = devices.back;

  if (device == null) return <LoadingView />;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <camera />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
