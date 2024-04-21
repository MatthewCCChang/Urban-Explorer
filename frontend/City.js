import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const City = () => {
  const [city, setCity] = useState('');
  const navigation = useNavigation();

  const handleInputChange = (text) => {
    setCity(text);
  };

  const handleSubmit = () => {
    // Handle submission, such as navigation to the Explore screen with the selected city
    navigation.navigate('Explore', { city });
  };

  return (
    <ImageBackground source={require('./assets/city_background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose a City to Explore!</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          value={city}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#176ff2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default City;
