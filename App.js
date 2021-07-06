import React from "react";
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  View,
} from "react-native";
import faker from "faker";

const Item = ({ item, isSelected, onSelect }) => {
  const styles = StyleSheet.create({
    listItem: {
      backgroundColor: isSelected ? "yellow" : "white",
      borderBottomWidth: 1,
      borderColor: "#222",
      color: "#222",
      display: "flex",
      padding: 20,
      width: "100%",
    },
  });

  return (
    <TouchableHighlight key={item.key} onPress={() => onSelect(item.id)}>
      <View style={styles.listItem}>
        <Text>
          {item.first_name} {item.last_name}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default function App() {
  // Fetch users from the remote API url => https://reqres.in/api/users
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const handlePress = () =>
    setUsers((users) => [faker.name.findName(), ...users]);

  React.useEffect(() => {
    const getUsers = () => {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((res) => {
          setUsers(res.data);
        })
        .finally(() => setIsLoaded(true));
    };

    getUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.main}>
        {isLoaded ? (
          <>
            <FlatList
              data={users}
              renderItem={({ item }) => (
                <Item
                  item={item}
                  isSelected={selected === item.id}
                  onSelect={setSelected}
                />
              )}
              keyExtractor={(item) => item.id}
              extraData={selected}
            />
            <Button title="Click me" onPress={handlePress} />
          </>
        ) : (
          <ActivityIndicator />
        )}
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
    justifyContent: "center",
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
