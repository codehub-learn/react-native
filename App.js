import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Platform,
  PlatformColor,
  Text,
  FlatList,
  View,
} from "react-native";
import faker from "faker";

const USERS = ["Lionel Messi", "Christiano Ronaldo"];

const Item = ({ item }) => (
  <View style={styles.listItem}>
    <Text>{item}</Text>
  </View>
);

export default function App() {
  const [users, setUsers] = React.useState(USERS);

  const handlePress = () =>
    setUsers((users) => [faker.name.findName(), ...users]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.main}>
        <FlatList
          data={users}
          renderItem={Item}
          keyExtractor={(item) => item}
        />
        {/* Make each item clickable */}
        {/* Highlight the selected item with yellow background color */}
        <Button title="Click me" onPress={handlePress} />
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
    justifyContent: "center",
    width: "100%",
  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: "#222",
    display: "flex",
    padding: 20,
    width: "100%",
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
