import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { FlatList } from "react-native-gesture-handler";
import SongCard from "../components/SongCard";
import { colors } from "./constants/colors";
import { FontSize, spacing } from "./constants/dimensions";
import { fontFamilies } from "./constants/fonts";

const LikeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign
            name={"arrowleft"}
            size={iconSizes.md}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons
            name={"equalizer"}
            size={iconSizes.md}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.headingText}> Like Songs</Text>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        style={{}}
        renderItem={({ item }) => (
          <SongCard
            containerStyle={{
              flex: 1,
              width: "full",
              height: "auto",
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 8,
              marginVertical: 0,
              borderRadius: 10,
              elevation: 0,
            }}
            imageStyle={{
              width: 50,
              height: 50,
              borderRadius: 8,
            }}
            textContainerStyle={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 2,
              marginVertical :0,
              marginInline: 2,
              gap: 12,
              height: "97%",
              alignItems: "center",
            }}
            titleStyle={{

              fontSize: FontSize.md,
              fontFamily: fontFamilies.bold,
              color: colors.textPrimary,
              marginVertical: 0,

            }}
            artistStyle={{
              fontSize: FontSize.sm,
              fontFamily: fontFamilies.medium,
              color: colors.textSecondary,
              marginVertical: 10,
            }}
            durationStyle={{
              fontSize: FontSize.sm,
              fontFamily: fontFamilies.light,
              color: colors.textSecondary,
              marginVertical: 10,

            }}
            textLeft={{

              flex: 1,
            }}
            textRight={{
              alignItems: "flex-end",
            }}
            overlayStyle={{
              position: "relative",
            }}
            playButtonTextStyle={{
              top: 5,
              left: -6,
            }}
          />
        )}
      />
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "rgba(224, 247, 250, 0.1)",
    shadowColor: colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginInline: 6,
    margin: 2,
    borderRadius: 16,
    marginTop: 4,
  },
  headingText: {
    fontSize: FontSize.lg,
    color: colors.textPrimary,
    fontFamily: fontFamilies.bold,
    marginVertical: 8,
    marginHorizontal: spacing.lg,
  },
});
