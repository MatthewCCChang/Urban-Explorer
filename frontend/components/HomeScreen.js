import React, { Component, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

import photo1 from "./images/goat.png";
import photo2 from "./images/goat.png";
import photo3 from "./images/goat.png";
import photo4 from "./images/goat.png";
import photo5 from "./images/goat.png";
import photo6 from "./images/goat.png";

const renderPhotoViews = (photos) => {
  return photos.map((photo, index) => (
    <View key={index} style={styles.view}>
      <Image source={photo} style={styles.image} />
    </View>
  ));
};
export default class HomeScreen extends Component {
  // TODO: UseEffect that will get all of the images/ids as soon as the page loads.
  // All photos are currently hard-coded.
  // TODO: Clicking on a icon navigates user to Restaurant Page, passing in restaurantID

  componentDidMount() {
    setTimeout(() => {
      if (this.scrollView) {
        this.scrollView.scrollTo({ x: -30 });
      }
    }, 1);
  }

  render() {
    const restaurants = [photo1, photo2, photo3, photo4, photo5, photo6];
    const activities = [photo1, photo2, photo3, photo4, photo5, photo6];

    // TOTO: Each restaurant and activity should be a json with the image url and the id of the place. You
    // would then need to change how you access the image, pretty simple, just like photo.url. then, we also
    // need a function so that when you click on the photo, it takes you to restaurant{ID}

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.centerAlignedContainer}>
          <Text style={styles.title}>URBAN EXPLORER</Text>
        </View>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.verticalScroll}
        >
          <View style={styles.centerAlignedContainer}>
            <Text style={styles.subtitle1}>Restaurants</Text>
          </View>
          <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={width - 60}
            snapToAlignment="center"
            contentInset={{
              top: 0,
              left: 30,
              bottom: 0,
              right: 30,
            }}
            style={styles.container}
          >
            {renderPhotoViews(restaurants)}
          </ScrollView>
          <View style={styles.centerAlignedContainer}>
            <Text style={styles.subtitle2}>Activities</Text>
          </View>
          <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={width - 60}
            snapToAlignment="center"
            contentInset={{
              top: 0,
              left: 30,
              bottom: 0,
              right: 30,
            }}
            style={styles.container}
          >
            {renderPhotoViews(activities)}
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centerAlignedContainer: {
    alignItems: "center",
  },
  

  verticalScroll: { 
    flexGrow: 1,
  },
  container: {
    minHeight: 200,
  },
  view: {
    width: width - 80,
    margin: 60,
    height: 250,
    borderRadius: 10,
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: 10, // Keep or remove based on design preference
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 80, // Optionally add more space directly above the title text
    color: '#fff',
  },
  subtitle1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20, // Optionally add more space directly above the title text
    color: '#fff',
  },
  subtitle2: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: -30, // Optionally add more space directly above the title text
    color: '#fff',
  },
});
