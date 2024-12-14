import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const PlayerDetails = () => {
  return (
    <View>
      {/* Song Details */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <AntDesign name="heart" size={24} color="#1dd1a1" />
        </TouchableOpacity>
        <View style={styles.songDetails}>
          <Text style={styles.songTitle}>Shape of You</Text>
          <Text style={styles.artistName}>Ed Sheeran</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="volume-high" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayerDetails;

const styles = StyleSheet.create({
  songDetails: {
    alignItems: "center",
  },
  songTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 5,
  },
  artistName: {
    color: "#aaa",
    fontSize: 16,
    fontStyle: "italic",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:10
  },
});
