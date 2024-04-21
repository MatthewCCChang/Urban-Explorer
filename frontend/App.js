import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import City from './City';
import Explore from './Explore';
import CardDetailsScreen from './CardDetailsScreen';


const Stack = createNativeStackNavigator();


export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="CardDetails" component={CardDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
