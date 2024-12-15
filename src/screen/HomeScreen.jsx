import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "./constants/colors";
import Header from "../components/Header";
import { fontFamilies } from "./constants/fonts";
import { FontSize, spacing } from "./constants/dimensions";
import SongCategory from "../components/SongCategory";
import FloatingPlaperC from "../components/FloatingPlaperComponent";
import { songWithCategory } from "../data/songWithCategory";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
     <Header/>
     
     <FlatList
        data={songWithCategory}
        renderItem={({ item }) => <SongCategory item={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingBottom: 400,
        }}
      />
     <FloatingPlaperC/>
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  headingText: {
    fontSize: FontSize.xl,
    color: colors.textPrimary,
    fontFamily :fontFamilies.heavy,
    paddingVertical :spacing.sm,
    paddingHorizontal:spacing.lg
  }
  
});
