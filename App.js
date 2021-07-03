import React from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Platform,
  PlatformColor,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [value, setValue] = React.useState("");

  const handlePress = () =>
    Alert.alert(value, null, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder="Enter sth..."
          onChangeText={setValue}
          value={value}
        />
        <Button title="Click me" onPress={handlePress} />
        {/* Add a TextInput and a Button component in the center of main area */}
        {/* The TextInput should be a controlled input */}
        {/* First write whatever you like in the input element */}
        {/* When clicking the button, trigger the Alert component by showing the input value */}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const sectionStyle = {
  alignItems: "center",
  ...Platform.select({
    ios: {
      backgroundColor: PlatformColor("systemTealColor"),
    },
    android: {
      backgroundColor: PlatformColor("@android:color/holo_blue_bright"),
    },
    default: {
      backgroundColor: "#222",
    },
  }),
  paddingVertical: 20,
};

const textStyle = {
  color: "#fff",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#222",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 300,
  },
  header: sectionStyle,
  headerText: textStyle,
  footer: sectionStyle,
  footerText: textStyle,
});
