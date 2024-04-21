import React from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import { Input } from "@rneui/themed";

export default function SignUp({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.centerAlignedContainer}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.leftAlignedContainer}>
        <Text style={styles.label}>Email</Text>
        <Input placeholder="Email" style={styles.input} />
        <Text style={styles.label}>Password</Text>
        <Input placeholder="Password" style={styles.input} />
        <Text style={styles.label}>Confirm Password</Text>
        <Input placeholder="Confirm Password" style={styles.input} />
      </View>
      <Button
        title="Already have an Account? Log In"
        onPress={() => navigation.navigate("SignIn")}
        style={styles.button}
      />
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
    color: '#fff',
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
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
  },
});
