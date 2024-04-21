import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {

  return (
    <View style={styles.navbar}>
      <Ionicons name="person" size={24} color="black" />
      <Ionicons name="home" size={24} color="black" />
      <Ionicons name="stats-chart" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: 81,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 32,
    shadowColor: "#d3e0f5",
    shadowOffset: {
      width: 15,
      height: -6
    },
    shadowRadius: 22,
    shadowOpacity: 1,
    backgroundColor: '#ffffff',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default Navbar;
