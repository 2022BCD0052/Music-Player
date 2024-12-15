import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import SongCard from "./SongCard";
import { FontSize, spacing } from "../screen/constants/dimensions";
import { colors } from "../screen/constants/colors";
import { fontFamilies } from "../screen/constants/fonts";

const SongCategory = ({item}) => {
  return (
    <View>
      <Text style={styles.headingText}>{item.title}</Text>
      <FlatList
        data={item.songs}
        renderItem={({ item }) => <SongCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={<View style={{ marginHorizontal: 5 }} />}
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
