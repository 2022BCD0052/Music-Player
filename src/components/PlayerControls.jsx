import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
const PlayerControls = () => {
  return (
    <View>
            {/* Waveform Progress Bar */}
            <View style={styles.progressBarContainer}>
        <View style={styles.waveform}>
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <View
                key={i}
                style={[
                  styles.wave,
                  i < 5 && styles.waveFilled, // Fills half the progress
                ]}
              />
            ))}
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>1:23</Text>
          <Text style={styles.timeText}>4:00</Text>
        </View>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="shuffle" size={28} color="#1dd1a1" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="skip-previous" size={45} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton}>
          <AntDesign name="play" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="skip-next" size={45} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="repeat" size={28} color="#1dd1a1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayerControls;

const styles = StyleSheet.create({
  controls: {
  } ,
   progressBarContainer: {
    marginBottom: 20,
  },
  waveform: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
  wave: {
    height: 12,
    width: 10,
    backgroundColor: "#555",
    borderRadius: 6,
  },
  waveFilled: {
    backgroundColor: "#1dd1a1",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    color: "#aaa",
    fontSize: 14,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  playButton: {
    backgroundColor: "#1dd1a1",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1dd1a1",
    shadowOpacity: 0.9,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 6 },
  },
});
