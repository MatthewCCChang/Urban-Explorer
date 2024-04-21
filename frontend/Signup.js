import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";


const Signup = () => {
  const onPressLogin = () => {
    // Do something about login operation
    navigation.navigate("City");
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigation();


  return (
    <ImageBackground
    source={require("./assets/loginpic.png")}
    style={styles.backgroundImage}
    blurRadius={1} // Adjust this value to increase or decrease the blur intensity
    >
        <View style={styles.container}>
        <Text style={styles.title}>URBAN EXPLORE</Text>
        {/* <Image
            source={require("./assets/explore-logo.png")}
            style={styles.image}
        /> */}
        <View style={styles.inputView}>
            <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setState({ email: text })}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setState({ password: text })}
            />
        </View>
        {/* <TouchableOpacity onPress={onPressForgotPassword}>
            <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
            <Text style={styles.loginText}>SIGN UP </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSignUp}>
            <Text style={styles.forgotAndSignUpText}> </Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#a2e5e8",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 80,
    color: "#FFFFFF",
    marginBottom: 230,
  },
  image: {
    marginBottom: 30,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgotAndSignUpText: {
    color: "#FFFFFF",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#176ff2",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});

export default Signup;