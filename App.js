import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Create a layout with a header a main area and a footer */}
      {/* Header should have the word "Header" horizontally aligned */}
      {/* Footer should have the word "Footer" horizontally aligned */}
      {/* Header and Footer should have white text and black background color */}
      {/* Main area should take the whole real estate vertically */}
      {/* Put a text message in the Main area horizontally and vertically aligned */}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
