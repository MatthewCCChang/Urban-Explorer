import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Accept = () => {
  const [city, setCity] = useState("");
  const navigation = useNavigation();

  const handleInputChange = (text) => {
    setCity(text);
  };

  const handleSubmit = () => {
    // Handle submission, such as navigation to the Explore screen with the selected city
    navigation.navigate("Milestones");
  };

  const handleSubmit2 = () => {
    // Handle submission, such as navigation to the Explore screen with the selected city
    navigation.navigate("Explore");
  };

  return (
    <ImageBackground
      source={require("./assets/city_background.png")}
      style={styles.backgroundImage}
      blurRadius={3} // Adjust this value to increase or decrease the blur intensity
    >
      <View style={styles.container}>
        <Text style={styles.title}>It looks like you are exploring the area!</Text>
        <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Indeed!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleSubmit2}>
          <Text style={styles.buttonText}>Not quite!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#ffffff",
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,

    borderRadius: 8,
  },
  button: {
    backgroundColor: "#176ff2",
    paddingVertical: 10,
    marginTop: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 80,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "#2c7848",
    // paddingVertical: 10,
    marginTop: 15,
    // paddingHorizontal: 20,
    padding: 30,
    borderRadius: 100,
    marginBottom: 30,
  },
  button2: {
    backgroundColor: "#cc2f44",
    marginTop: 15,
    padding: 30,
    borderRadius: 100,
    marginBottom: 30,
  }
});

export default Accept;
