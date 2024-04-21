// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from "react-native";
// import Auth0 from "react-native-auth0";
// import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from "./auth0-credentials";

// const auth0 = new Auth0({
//   domain: AUTH0_DOMAIN,
//   clientId: AUTH0_CLIENT_ID,
// });

// const Login = () => {
//   const [state, setState] = useState({
//     email: "",
//     password: "",
//   });
//   const onPressLogin = () => {
//     // Auth0 login
//     auth0.webAuth
//       .authorize({ scope: "openid profile email" })
//       .then((credentials) => {
//         console.log("Login Success:", credentials);
//         // Handle successful login
//       })
//       .catch((error) => {
//         console.error("Login Error:", error);
//       });
//   };

//   const onPressSignUp = () => {
//     // Auth0 sign up (similar to login but might use different scope or connection)
//     auth0.webAuth
//       .authorize({ scope: "openid profile email", prompt: "signUp" })
//       .then((credentials) => {
//         console.log("Signup Success:", credentials);
//         // Handle successful signup
//       })
//       .catch((error) => {
//         console.error("Signup Error:", error);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}> Urban Explore</Text>
//       <Image
//         // source={require("../assets/explore-logo.png")}
//         style={styles.image}
//       />
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.inputText}
//           placeholder="Email"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setState({ email: text })}
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.inputText}
//           secureTextEntry
//           placeholder="Password"
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setState({ password: text })}
//         />
//       </View>
//       <TouchableOpacity onPress={onPressSignUp} style={styles.loginBtn}>
//         <Text style={styles.loginText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={onPressLogin}>
//         <Text style={styles.forgotAndSignUpText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#a2e5e8",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: 50,
//     color: "#0f3d40",
//     marginBottom: 40,
//   },
//   image: {
//     marginBottom: 30,
//   },
//   inputView: {
//     width: "80%",
//     backgroundColor: "#3AB4BA",
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 20,
//     justifyContent: "center",
//     padding: 20,
//   },
//   inputText: {
//     height: 50,
//     color: "white",
//   },
//   forgotAndSignUpText: {
//     color: "#0f3d40",
//     fontSize: 11,
//   },
//   loginBtn: {
//     width: "80%",
//     backgroundColor: "#0f3d40",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     marginBottom: 10,
//   },
//   loginText: {
//     color: "white",
//   },
// });

// export default Login;

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


const Login = () => {
  const onPressLogin = () => {
    // Do something about login operation
    navigation.navigate("City");
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
    navigation.navigate("Signup");
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
            <Text style={styles.loginText}>LOGIN </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSignUp}>
            <Text style={styles.forgotAndSignUpText}>Signup</Text>
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

export default Login;