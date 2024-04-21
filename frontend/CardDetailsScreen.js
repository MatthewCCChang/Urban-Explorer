import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function CardDetailsScreen({ route, navigation }) {
  const { cardTitle } = route.params;
  const [imageURL, setImageURL] = useState(
    "https://s3-media1.fl.yelpcdn.com/bphoto/vwGSRka4NtUmHnIUt1OxzA/o.jpg",
  );
  const [review, setReview] = useState(0);
  const [title, setTitle] = useState("BJ's Bar");
  const [location, setLocation] = useState("Irvine, 1924");
  const [phone, setPhone] = useState("949 246 6367");
  const [menuURL, setMenuURL] = useState("");

  const onPressExplore = () => {
    navigation.navigate("Accept");
  };

  const openURL = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  useEffect(() => {
    if (cardTitle) {
      setReview(cardTitle.rating);
      setTitle(cardTitle.name);
      setLocation(cardTitle.location[0] + ' ' + cardTitle.location[1]);
      setPhone(cardTitle.phone);
      setImageURL(cardTitle.image);
    }
  }, []);
  return (
    
    <View style={{ flex: 1, marginTop: 100 }}>
      <View style={styles.backButtonContainer}>
        <TouchableHighlight
          style={styles.backButton}
          onPress={() => navigation.navigate("Explore")}
          underlayColor="transparent"
        >
          <Icon name="arrow-back-ios" size={30} />
        </TouchableHighlight>
      </View>
      <View style={styles.centerAlignedContainer}>
      <View style={styles.centerAlignedContainer}>
        <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.phone}>{phone}</Text>
        <TouchableHighlight
          onPress={() => openURL(menuURL)}
          underlayColor="transparent"
        >
          <View style={styles.menuContainer}>
            <Text style={styles.menuText}>Menu</Text>
            <Icon name="open-in-new" size={24} />
          </View>
        </TouchableHighlight>
        {false && (
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewText}>Local Review: {review}</Text>
          </View>
        )}
      </View>
      <ScrollView style={styles.scrollView}>
        <Image source={{ uri: imageURL }} style={styles.image} />
        
      </ScrollView>
      <TouchableOpacity onPress={onPressExplore} style={styles.loginBtn}>
            <Text style={styles.loginText}>Let's Go! </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  backButtonContainer: {
    position: "absolute",
    top: 5,
    left: 15,
    zIndex: 1,
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontFamily: "Menlo",
    fontSize: 40,
    marginBottom: 10,
    marginTop: 70,
    textAlign:'center',
    fontWeight: "bold",
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    fontFamily: "Menlo",
    marginTop: 5,
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
  },
  location: {
    fontFamily: "Menlo",
  },
  phone: {
    fontFamily: "Menlo",
    marginBottom: 10,
  },
  image: {
    height: 200,  // Increased height for better visibility
    width: 300,   // Add width to maintain aspect ratio
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "center",
   },
  centerAlignedContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  menuText: {
    fontFamily: "Menlo",
    fontSize: 20,
    marginRight: 10,
  },
  loginBtn: {
    width: "50%",
    backgroundColor: "#176ff2",
    borderRadius: 25,
    height: 50,
    margin: 110,
    marginBottom: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    shadowColor: "#5e96eb",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 22,
    shadowOpacity: 1,
  },
  loginText: {
    color: "white",
  },
});
