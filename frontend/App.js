import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Backend from "./util.js";

export const globalStyles = StyleSheet.create({
  darkBackground: {
    backgroundColor: "#121212", // A common dark mode color
  },
});

import HomeScreen from "./components/HomeScreen";
import Restauarant from "./components/Restaurant";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Activity from "./components/Activity";
import Title from "./components/Title";

const Stack = createStackNavigator();

export default function App() {
  const [data, setData] = useState(null);
  const [restaurantName, setRestaurantName] = useState("dummy");

  const fetchData = async () => {
    try {
      const response = await Backend.get("/");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setData(null);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Title"} // sets the default route
        screenOptions={{
          headerShown: false,
          animationEnabled: false, // Disables animations for all screens
          cardStyle: { backgroundColor: "#121212", opacity: 1 }, // Ensures no opacity transition styles are applied
        }}
      >
        <Stack.Screen name="Title" component={Title} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={Restauarant} />
        <Stack.Screen name="Activity" component={Activity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centerAlignedContainer: {
    alignItems: "center",
  },
});
