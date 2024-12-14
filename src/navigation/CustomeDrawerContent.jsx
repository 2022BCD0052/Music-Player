import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { iconSizes, spacing } from '../screen/constants/dimensions'
import AntDesign from "react-native-vector-icons/AntDesign";
import Octions from "react-native-vector-icons/Octicons";
import { colors } from '../screen/constants/colors';

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

        <View>
          
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
  }

})