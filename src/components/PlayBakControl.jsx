import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontSize, iconSizes } from "../screen/constants/dimensions";
import { colors } from "../screen/constants/colors";
export const GotoPreviousButton = ({ size = iconSizes.md }) => {
  return (
    <View>
      <TouchableOpacity>
        <Ionicons
          name={"play-skip-forward-outline"}
          size={size}
          color={colors.iconPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};

export const PlayPauseButton = ({ size = iconSizes.md }) => {
  return (
    <View>
      <TouchableOpacity>
        <Ionicons
          name={true ? "play-outline" : "pause"}
          size={size}
          color={colors.iconPrimary}
        />
      </TouchableOpacity>
    </View>
  );
}

export const GotoNextButton = ({ size = iconSizes.md }) => {
    return (
      <View>
        <TouchableOpacity>
          <Ionicons
            name={"play-skip-back-outline"}
            size={size}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
      </View>
    );
  };


