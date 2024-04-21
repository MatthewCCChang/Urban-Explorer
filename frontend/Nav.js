import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();
  const [activeIcon, setActiveIcon] = useState("home"); // Set the initial active icon

  const handleIconPress = (iconName) => {
    setActiveIcon(iconName);
    navigation.navigate(
      iconName === "home"
        ? "Explore"
        : iconName === "person"
          ? "Ranking"
          : "Milestones",
    );
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => handleIconPress("home")}>
        <Ionicons
          name="home"
          size={24}
          color={activeIcon === "home" ? "#176ff2" : "grey"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleIconPress("person")}>
        <Ionicons
          name="person"
          size={24}
          color={activeIcon === "person" ? "#176ff2" : "grey"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleIconPress("stats-chart")}>
        <Ionicons
          name="stats-chart"
          size={24}
          color={activeIcon === "stats-chart" ? "#176ff2" : "grey"}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: 81,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 32,
    shadowColor: "#d3e0f5",
    shadowOffset: {
      width: 15,
      height: -6,
    },
    shadowRadius: 22,
    shadowOpacity: 1,
    backgroundColor: "#ffffff",
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default Navbar;
