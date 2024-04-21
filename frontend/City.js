import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CityPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>City Page</Text>
      <Text>This is the City Page content.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CityPage;
