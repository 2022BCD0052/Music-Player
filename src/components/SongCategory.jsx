import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import SongCard from "./SongCard";
import { FontSize, spacing } from "../screen/constants/dimensions";
import { colors } from "../screen/constants/colors";
import { fontFamilies } from "../screen/constants/fonts";

const SongCategory = () => {
  return (
    <View>
      <Text style={styles.headingText}>Recommended For You</Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 7, 8, 9, 10]}
        renderItem={SongCard}

        keyExtractor={(item) => item.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View style={{ marginHorizontal: 5, }}
        />}
        style={{
         marginHorizontal: 3,
        }}
      />
      
      
    </View>
  );
};

export default SongCategory;

const styles = StyleSheet.create({
  headingText: {
    fontSize: FontSize.xl,
    color: colors.textPrimary,
    fontFamily: fontFamilies.heavy,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
});
