import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Login';
// import { useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import City from './City';
import Explore from './Explore';

// const Stack = createStackNavigator();


export default function App () {
  return (
    <View style={styles.container}>
      <Explore />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
