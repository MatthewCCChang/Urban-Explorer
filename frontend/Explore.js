import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import Nav from "./Nav";
import { useNavigation } from "@react-navigation/native";
import Backend from './utils';

const ButtonRowWithCards = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null);
  const [restaurant1, setRestaurant1] = useState("Mystery Restaurant 1");
  const [restaurant2, setRestaurant2] = useState("Mystery Restaurant 2");
  const [viewpoint1, setViewpoint1] = useState("Mystery Viewpoint 1");
  const [viewpoint2, setViewpoint2] = useState("Mystery Viewpoint 2");
  const [activity1, setActivity1] = useState("Mystery Activity 1");
  const [activity2, setActivity2] = useState("Mystery Activity 2");
  const [activities, setActivities] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [hikes, setHikes] = useState([]);

  

  useEffect(() => {
    const initializeData = async () => {
      await fetchData(); // Ensures fetchData completes before moving on
      // getTwoForAll();    // Executes after fetchData is done
      handleButtonPress("viewpoints");  // Executes last
    };

    initializeData();
  }, []);



  const fetchData = async () => {
    try {
      const his = await Backend.get('/hikes');
      const acts = await Backend.get('/activities');
      const rests = await Backend.get('/restaurants');
      setViewpoint1(his.data[0]);
      setViewpoint2(his.data[1]);
      setRestaurant1(rests.data[0]);
      setRestaurant2(rests.data[1]);
      setActivity1(acts.data[0]);
      setActivity2(acts.data[1]);
      setRestaurants(rests.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  


// const getTwoForAll = () => {
//   nums = getTwo(restaurants.length);
//   setRestaurant1(restaurants[nums[0]]);
//   setRestaurant2(nums[1]);
//   nums = getTwo(activities.length);
//   setActivity1(nums[0]);
//   setActivity2(num[1]);
//   nums = getTwo(hikes.length);
//   setViewpoint1(nums[0]);
//   setViewpoint2(nums[1]);
// }

// const getTwo = (len) => {
//   num = getRandomInt(len);
//   num2 = getRandomInt(len);
//   return [num, num2];
// }

// const getRandomInt = (len) => {
//   return Math.floor(Math.random() * len);
// }

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

  const Card = ({ id, cardTitle }) => {
    return (
      <>
        <TouchableOpacity onPress={() => handleCardPress(cardTitle)}>
        {selectedButton === "viewpoints" &&
          <View style={styles.card}>
            <Image
              source={require("./assets/place.jpg")}
              style={styles.cardImage}
            />
          </View>
        }
        {selectedButton === "restaurants" &&
          <View style={styles.card}>
            <Image
              source={require("./assets/food.jpg")}
              style={styles.cardImage}
            />
          </View>
        }
        {selectedButton === "activities" &&
          <View style={styles.card}>
            <Image
              source={require("./assets/hike.jpg")}
              style={styles.cardImage}
            />
          </View>
        }
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
          <Card id={viewpoint1} text={viewpoint1}  />
          <Card id={viewpoint2} text={viewpoint2} />
        </View>
      )}
      {selectedButton === "restaurants" && (
        <View style={styles.cardRow}>
          <Card id={restaurant1} text={restaurant1}  />
          <Card id={restaurant2} text={restaurant2} />
        </View>
      )}
      {selectedButton === "activities" && (
        <View style={styles.cardRow}>
          <Card id={activity1} text={activity1} />
          <Card id={activity2} text={activity2} />
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
    width: "100%",
    height: "100%",
    marginBottom: 15,
    marginTop: 15,
    borderRadius:15,
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
