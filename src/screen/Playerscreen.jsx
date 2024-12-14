import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import PlayerDetails from "../components/PlayerDetails";
import PlayerControls from "../components/PlayerControls";
import { colors } from "./constants/colors";


const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIupO1EcXWf6aDr0eTMI1yYxyOONwkh5FV4A8ij58zUQojgfTiKw19yysJHjbIt1qrmw&usqp=CAU";

const PlayerScreen = () => {
  return (
    <LinearGradient
      colors={["#060e1f", "#0c1938","#193678"]}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Now Playing</Text>
        <TouchableOpacity>
          <AntDesign name="ellipsis1" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <PlayerDetails/>
<PlayerControls/>
    </LinearGradient>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:colors.background
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 40,
    marginBottom:80
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 6,
    borderColor: "#1dd1a1",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 6 },
  },
 
});
