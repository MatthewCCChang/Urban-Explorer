import React, { useRef } from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import Nav from "./Nav";


const Milestones = ({ route }) => {
  // const { rank } = route.params;
  const rank = "newcomer";


  const scrollViewRef = useRef(null);

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
    <Text style={styles.irvine}>Irvine Milestones</Text>
    <Image source={{ uri: "https://s3-media1.fl.yelpcdn.com/bphoto/vwGSRka4NtUmHnIUt1OxzA/o.jpg" }} style={styles.image} />    
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  
  irvine: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 30,
    flex:1,
    textAlign: 'center',
    marginTop: 100
  },
  miles: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 45,
    flex:1,
    textAlign: 'center',
  },
//   image: {
//     height: 200,  // Increased height for better visibility
//     width: 300,   // Add width to maintain aspect ratio
//     borderRadius: 10,
//     alignSelf: "center",
//    },
});

export default Milestones;
