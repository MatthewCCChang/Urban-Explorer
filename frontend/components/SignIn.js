import React from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import { Input } from "@rneui/themed";

export default function SignIn({ navigation }) {
  // Need to implement authentication on Enter
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.centerAlignedContainer}>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={styles.leftAlignedContainer}>
        <Text style={styles.label}>Email</Text>
        <Input placeholder="Email" style={styles.input} />
        <Text style={styles.label}>Password</Text>
        <Input placeholder="Password" style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
        <View style={{ flexGrow: 0.6 }} />
        <Button title="Enter" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    width: "100%",
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  centerAlignedContainer: {
    alignItems: "center",
  },
  leftAlignedContainer: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row", // Align buttons horizontally
    justifyContent: "space-evenly", // This will evenly space your buttons
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
  },
});
