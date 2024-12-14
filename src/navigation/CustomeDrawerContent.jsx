import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { FontSize, iconSizes, spacing } from '../screen/constants/dimensions'
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwersome from "react-native-vector-icons/FontAwesome";
import Octions from "react-native-vector-icons/Octicons";
import { colors } from '../screen/constants/colors';
import { fontFamilies } from '../screen/constants/fonts';

const CustomeDrawerContent = (props) => {
  const isDarkMode = true

  return (
     <DrawerContentScrollView style={styles.container}>
        <View style={styles.HeaderIconcontainer}>
        <TouchableOpacity>
            <AntDesign name="close" size={iconSizes.lg} color={colors.iconPrimary} />

          </TouchableOpacity>
          <TouchableOpacity>
            <Octions name={isDarkMode ? "sun" :"moon"} size={iconSizes.lg} color={colors.iconPrimary} />

          </TouchableOpacity>

        </View>

        <View style={styles.drawerIconContainer}>
          <DrawerItem
          label={"Profile"}
          icon={()=>(<FontAwersome name="user" 
            size={iconSizes.md}
            color={colors.iconPrimary}
          />)}
          labelStyle={styles.labelStyle}
          style={styles.Draweritem}


          />

        </View>

      </DrawerContentScrollView>
  )
}

export default CustomeDrawerContent

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  HeaderIconcontainer:{
    flexDirection :"row",
    justifyContent :"space-between",
    alignItems:"center"
  },
  drawerIconContainer:{
    marginVertical:spacing.md
  },
  labelStyle:{
    fontSize:FontSize.md,
    color:colors.textPrimary,
    fontFamily :fontFamilies.medium
  },
  Draweritem:{
    marginVertical :spacing.sm

  }

})