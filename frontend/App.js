import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import City from "./City";
import Explore from "./Explore";
import CardDetailsScreen from "./CardDetailsScreen";
import Ranking from "./Ranking";
import Signup from "./Signup"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false, // Disables animations for all screens
          cardStyle: { backgroundColor: "#121212", opacity: 1 }, // Ensures no opacity transition styles are applied
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="City" component={City} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="CardDetails" component={CardDetailsScreen} />
        <Stack.Screen name="Ranking" component={Ranking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App () {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Explore" component={Explore} />
//         <Stack.Screen name="CardDetails" component={CardDetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
