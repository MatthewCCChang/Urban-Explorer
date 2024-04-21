import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Nav from './Nav';

const CardDetailsScreen = ({ route }) => {
  const { cardTitle } = route.params;

  return (
    <View style={styles.container}>
      <Text>{cardTitle} Details Screen</Text>
      {/* Add more details about the card here */}
      <Nav/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardDetailsScreen;
