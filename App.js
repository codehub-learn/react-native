import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // Fix issue with status bar in iOS
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.main}>
        <Text>Main</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    backgroundColor: "#222",
    paddingVertical: 20,
  },
  headerText: {
    color: "#fff",
  },
  footer: {
    alignItems: "center",
    backgroundColor: "#222",
    paddingVertical: 20,
  },
  footerText: {
    color: "#fff",
  },
});
