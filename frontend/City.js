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

const City = () => {
  const [city, setCity] = useState("");
  const navigation = useNavigation();

  const handleInputChange = (text) => {
    setCity(text);
  };

  const handleSubmit = () => {
    // Handle submission, such as navigation to the Explore screen with the selected city
    navigation.navigate("Explore", { city });
  };

  return (
    <ImageBackground
      source={require("./assets/city_pic.jpg")}
      style={styles.backgroundImage}
      blurRadius={3} // Adjust this value to increase or decrease the blur intensity
    >
      <View style={styles.container}>
        <Text style={styles.title}>What's the Move?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a city name"
          value={city}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enter</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
});

export default City;
