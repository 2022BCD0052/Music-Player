import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../screen/constants/colors";
import { fontFamilies } from "../screen/constants/fonts";
import { FontSize, spacing } from "../screen/constants/dimensions";

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIupO1EcXWf6aDr0eTMI1yYxyOONwkh5FV4A8ij58zUQojgfTiKw19yysJHjbIt1qrmw&usqp=CAU";

  const SongCard = ({
    containerStyle,
    imageStyle,
    textContainerStyle,
    overlayStyle,
    playButtonStyle,
    playButtonTextStyle,
    titleStyle,
    artistStyle,
    albumStyle,
    durationStyle,
  }) => {
    return (
      <TouchableOpacity style={[styles.container, containerStyle]}>
        {/* Image Section */}
        <Image source={{ uri: imageUrl }} style={[styles.image, imageStyle]} />
        <View style={[styles.overlay, overlayStyle]} />
  
        {/* Play Button */}
        <TouchableOpacity style={[styles.playButton, playButtonStyle]}>
          <Text style={[styles.playButtonText, playButtonTextStyle]}>▶</Text>
        </TouchableOpacity>
  
        {/* Text Section */}
        <View style={[styles.textContainer, textContainerStyle]}>
          <View style={styles.textLeft}>
            <Text style={[styles.title, titleStyle]} numberOfLines={1} ellipsizeMode="tail">
              Song Title That Might Be Very Long and Needs Truncation
            </Text>
            <Text style={[styles.artist, artistStyle]} numberOfLines={1} ellipsizeMode="tail">
              Artist Name That Might Be Too Long
            </Text>
          </View>
          <View style={styles.textRight}>
            <Text style={[styles.album, albumStyle]}>Album Name</Text>
            <Text style={[styles.duration, durationStyle]}>3:45</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  

export default SongCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  playButton: {
    position: "absolute",
    top: spacing.sm,
    left: spacing.sm,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  playButtonText: {
    fontSize: FontSize.xl,
    color: colors.textSecondary,
    fontWeight: "bold",
  },
  textContainer: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: spacing.md,
    height: "30%",
  },
  textLeft: {
    flex: 1,
    alignItems: "flex-start",
    marginRight: spacing.md, // Added margin to avoid overflow into textRight
  },
  textRight: {
    alignItems: "flex-end",
  },
  title: {
    fontSize: FontSize.md,
    fontWeight: "bold",
    fontFamily: fontFamilies.bold,
    color: colors.textSecondary,
  },
  artist: {
    fontSize: FontSize.sm,
    fontFamily: fontFamilies.medium,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  album: {
    fontSize: FontSize.sm,
    fontFamily: fontFamilies.medium,
    color: colors.textPrimary,
    
  },
  duration: {
    fontSize: FontSize.sm,
    fontFamily: fontFamilies.light,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
}); 