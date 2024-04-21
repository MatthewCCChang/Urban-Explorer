import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import Nav from "./Nav";
import { useNavigation } from "@react-navigation/native";

const ButtonRowWithCards = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null);
  const [restaruant1, setRestaurant1] = useState("restaurant 1");
  const [restaurant2, setRestaurant2] = useState("restaraunt 2");
  const [viewpoint1, setViewpoint1] = useState("viewpoint 1");
  const [viewpoint2, setViewpoint2] = useState("viewpoint 2");
  const [activity1, setActivity1] = useState("activity 1");
  const [activity2, setActivity2] = useState("activity 2");

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleCardPress = (cardTitle) => {
    navigation.navigate("CardDetails", { cardTitle });
  };

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const local = {
    fontSize: 30,
    marginTop: 90,
    fontWeight: "bold",
    fontFamily: "Montserrat_400Regular",
    color: "#3988ff",
  };

  const explore = {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    fontWeight: "normal",
    color: "#000000",
    marginRight: 15,
  };

  const irvine = {
    fontSize: 45,
    fontWeight: "500",
    fontFamily: "Montserrat_400Regular",
    color: "#000000",
  };

  const Card = ({ id, text }) => {
    return (
      <>
        <TouchableOpacity onPress={() => handleCardPress(text)}>
          <View style={styles.card}>
            <Image
              source={require("./assets/goat.png")}
              style={styles.cardImage}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.centerAlignedContainer}>
          {id === 4 && <Text style={styles.cardText}>{activity1}</Text>}
          {id === 5 && <Text style={styles.cardText}>{activity2}</Text>}
          {id === 2 && <Text style={styles.cardText}>{restaruant1}</Text>}
          {id === 3 && <Text style={styles.cardText}>{restaurant2}</Text>}
          {id === 0 && <Text style={styles.cardText}>{viewpoint1}</Text>}
          {id === 1 && <Text style={styles.cardText}>{viewpoint2}</Text>}
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={local}>Newcomer</Text>
      <View style={styles.exploreCity}>
        <Text style={explore}>Explore</Text>
        <Text style={irvine}>Irvine</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "viewpoints" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("viewpoints")}
        >
          <Text>Viewpoints</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "restaurants" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("restaurants")}
        >
          <Text>Restaurants</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "activities" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("activities")}
        >
          <Text>Activities</Text>
        </TouchableOpacity>
      </View>
      {selectedButton === "viewpoints" && (
        <View style={styles.cardRow}>
          <Card id={0} text="Card 1" />
          <Card id={1} text="Card 2" />
        </View>
      )}
      {selectedButton === "restaurants" && (
        <View style={styles.cardRow}>
          <Card id={2} text="Card 1" />
          <Card id={3} text="Card 2" />
        </View>
      )}
      {selectedButton === "activities" && (
        <View style={styles.cardRow}>
          <Card id={4} text="Card 1" />
          <Card id={5} text="Card 2" />
        </View>
      )}
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    color: "#a8a8a8",
  },
  selectedButton: {
    color: "#176ff2",
    backgroundColor: "#caddfa",
    borderRadius: 8,
  },
  card: {
    width: 280,
    height: 200,
    margin: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#ebebeb",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    borderRadius: 20,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  centerAlignedContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  cardText: {
    color: "#000000",
    fontFamily: "Montserrat_400Regular",
  },
  exploreCity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});

export default ButtonRowWithCards;
