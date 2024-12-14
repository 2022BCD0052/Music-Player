import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../screen/constants/colors";
import { fontFamilies } from "../screen/constants/fonts";
import { FontSize } from "../screen/constants/dimensions";
import {
  GotoNextButton,
  GotoPreviousButton,
  PlayPauseButton,
} from "./PlayBakControl";
import { useSharedValue } from "react-native-reanimated";
import { Slider } from "react-native-awesome-slider";
import MovingText from "./MovingText";
import { useNavigation } from "@react-navigation/native";
const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIupO1EcXWf6aDr0eTMI1yYxyOONwkh5FV4A8ij58zUQojgfTiKw19yysJHjbIt1qrmw&usqp=CAU";

export default function FloatingPlaperC() {
  const navigation = useNavigation();
  const progress = useSharedValue(30);

  const min = useSharedValue(0);
  const max = useSharedValue(100);
  const handleOpenPlayerScreen=()=>{
    navigation.navigate('PLAY_SCREEN')
  }
  return (
    <View>
      <Slider
        style={styles.slider}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        theme={{
          disableMinTrackTintColor: "#17274d",
          maximumTrackTintColor: "rgba(236, 239, 241, 0.46)",
          minimumTrackTintColor: "#5779c9",
          cacheTrackTintColor: "#17274d",
          bubbleBackgroundColor: "#17274d",
          heartbeatColor: "#999",
        }}
        containerStyle={{
          height: 4,
        }}
        renderBubble={() => <View />}
      />
      <TouchableOpacity activeOpacity={0.814} style={styles.container} onPress={handleOpenPlayerScreen}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.infoContainer}>
          <MovingText
            text={
              "Mere Vatan Ke Logon jara karo"
            }
            style={styles.songTitle}
            animationThreshold={10}
          />
          <Text style={styles.songArtist} numberOfLines={1}>
            Singer Name
          </Text>
        </View>
        <View style={styles.controlsContainer}>
          <GotoPreviousButton size={25} />
          <PlayPauseButton size={30} />
          <GotoNextButton size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 4,
    margin: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.iconPrimary,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  songTitle: {
    fontSize: FontSize.md,
    fontWeight: "bold",
    width: "88%",
    color: colors.textPrimary,
    fontFamily: fontFamilies.medium,
    textTransform: "capitalize",
  },
  songArtist: {
    fontSize: FontSize.sm,
    color: colors.textSecondary,
    fontFamily: fontFamilies.regular,
    marginTop: 4,
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  slider: {
    zIndex: 100,
    paddingInline: 4,
    marginInline: 6,
    borderRadius: 12,
  },
});
