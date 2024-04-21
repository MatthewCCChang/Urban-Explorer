import React, { useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import Nav from './Nav';

const Ranking = () => {
  const logos = [
    { name: require("./assets/ambassador.png"), isLocal: false },
    { name: require("./assets/local.png"), isLocal: false },
    { name: require("./assets/adventurer.png"), isLocal: false },
    { name: require("./assets/tourist.png"), isLocal: false },
    { name: require("./assets/newcomer.png"), isLocal: true },
  ];

  const scrollViewRef = useRef(null);

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onContentSizeChange={handleContentSizeChange}
      >
        <View style={styles.spacer} />

        {logos.map((logo, index) => (
          <View key={index} style={styles.logoContainer}>
            <Image source={logo.name} style={[styles.logo, logo.isLocal && styles.highlighted]} />
            {logo.isLocal && <Text style={styles.localText}>You're a newcomer!</Text>}
          </View>
        ))}

        {/* <View style={styles.whiteBox}>
          <Text style={styles.whiteBoxText}>Local</Text>
        </View> */}
      </ScrollView>
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 81,
    paddingBottom: 100, 
  },
  spacer: {
    // height: 200, // Height to scroll down initially
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 300,
  },
  highlighted: {
    // borderWidth: 10,
    // borderColor: '#FFC107',
    borderRadius: 32,
    shadowColor: '#5e96eb',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 22,
    shadowOpacity: 1,
  },
  localText: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#5e96eb',
    // marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  whiteBox: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 81,
    color: "#3988ff",
  },
  whiteBoxText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Ranking;
