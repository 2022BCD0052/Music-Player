import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

export default function MovingText({ text, animationThresold = 10, style }) {
  const translateX = useSharedValue(0); // Animation value
  const shouldAnimate = text.length >= animationThresold;
  const textWidth = text.length * 8; // Adjusted based on font size

  useEffect(() => {
    if (shouldAnimate) {
      translateX.value = withRepeat(
        withTiming(-textWidth, {
          duration: 8000,
          easing: Easing.linear,
        }),
        -1, // Infinite repeat
        false // No reverse
      );
    }
  }, [shouldAnimate, textWidth]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        numberOfLines={1}
        style={[
          style,
          animatedStyle,
          shouldAnimate && { width: textWidth + 100, paddingRight: 0 },
        ]}
      >
        {text}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: "80%", // Ensures the text is clipped outside its boundaries
  },
});
