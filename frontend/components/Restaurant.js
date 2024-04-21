import React from "react";
import { View, Text, Button } from "react-native";

export default function Restaurant({ route, navigation }) {
  const { restaurantID } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Restaurants</Text>
      <Text>ID: hi{restaurantID}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Restaurant")}
      />
    </View>
  );
}
