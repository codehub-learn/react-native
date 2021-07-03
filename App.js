import React from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const USERS = ["Lionel Messi", "Christiano Ronaldo"];

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
        {/* Replace the content of the main area with a list of users using FlatList */}
        {/* Add a Button after the list */}
        {/* When pressing the button, we should add another user at the top of the list */}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const sectionStyle = {
  alignItems: "center",
  backgroundColor: "#222",
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
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 300,
  },
  header: sectionStyle,
  headerText: textStyle,
  footer: sectionStyle,
  footerText: textStyle,
});
