import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import Nav from './Nav';


const ButtonRowWithCards = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const local = {
    // width: 56,
    // height: 24,
    fontSize: 30,
    marginTop: 70,
    fontWeight: "bold",
    fontFamily: 'Montserrat_400Regular',
    // fontStyle: "normal",
    // letterSpacing: 0,
    // textAlign: "left",
    color: "#3988ff"
  };

  const explore = {
    // width: 53,
    // height: 17,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 18,
    fontWeight: "normal",
    // fontStyle: "normal",
    // letterSpacing: 0,
    // textAlign: "left",
    color: "#000000",
    marginRight: 15,
  };

  const irvine = {
    // width: 92,
    // height: 39,
    fontSize: 45,
    fontWeight: "500",
    fontFamily: 'Montserrat_400Regular',
    // fontStyle: "normal",
    // letterSpacing: 0,
    // textAlign: "left",
    color: "#000000"
  };

  const Card = ({ text }) => {
    return (
      <View style={styles.card}>
        <Text>{text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    <Text style={local}>Local</Text>
    <View style={styles.exploreCity}>
      <Text style={explore}>Explore</Text>
      <Text style={irvine}>Irvine</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, selectedButton === 'Viewpoints' && styles.selectedButton]}
          onPress={() => handleButtonPress('Viewpoints')}
        >
          <Text>Viewpoints</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedButton === 'Restaurants' && styles.selectedButton]}
          onPress={() => handleButtonPress('Restaurants')}
        >
          <Text>Restaurants</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedButton === 'Activities' && styles.selectedButton]}
          onPress={() => handleButtonPress('Activities')}
        >
          <Text>Activities</Text>
        </TouchableOpacity>
      </View>
      {selectedButton && (
        <View style={styles.cardRow}>
          <Card text="Card 1" />
          <Card text="Card 2" />
        </View>
      )}
      <Nav/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    // backgroundColor: '#e0e0e0',
    // borderRadius: 8,
    marginRight: 10,
    color: '#a8a8a8',
  },
  selectedButton: {
    color: '#176ff2',
    backgroundColor: '#caddfa',
    borderRadius: 8,
  },
//   cardRow: {
//     flexDirection: 'row',
//   },
  card: {
    // padding: 90,
    width: 280,
    height: 200,
    margin: 10,
    backgroundColor: '#ffffff',
    shadowColor: "#ebebeb",
    shadowOffset: {
        width: 5,
        height: 5
      },
      shadowRadius: 10,
      borderRadius: 20,
      shadowOpacity: 1,
  },
  exploreCity: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 40
  }
});

export default ButtonRowWithCards;
