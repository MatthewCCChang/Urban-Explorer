import React from "react";
import { View, Text, Button } from "react-native";

export default function Restaurants({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Restaurants</Text>
      <Button
        title="restaurants"
        onPress={() => navigation.navigate("Restaurant", { restaurantID: 2 })}
      />
    </View>
  );
}
