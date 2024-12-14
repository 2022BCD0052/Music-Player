import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import { iconSizes, spacing } from "../screen/constants/dimensions";
import { colors } from "../screen/constants/colors";
import {  useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation()
  const toggleDrawer = ()=>{
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleDrawer}>
        <FontAwesome5
          name={"grip-lines"}
          color={colors.iconPrimary}
          size={iconSizes.md}
        />
      </TouchableOpacity>
<View>
  <View>
     <Text 
  style={
    {
      fontSize: 20,
      color: colors.textPrimary,
      fontWeight: "bold",
      
    }
  }
  >Musico</Text>
  </View>
 
  </View> 
      <TouchableOpacity>
        <AntDesign
          name={"search1"}
          color={colors.iconPrimary}
          size={iconSizes.md}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical:spacing.md ,
    paddingHorizontal:spacing.lg
  },
});

export default Header;
