import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { colors } from '../screen/constants/colors'
import { iconSizes, spacing } from '../screen/constants/dimensions'
import AntDesign from "react-native-vector-icons/AntDesign";
import Octions from "react-native-vector-icons/Octicons";

const CustomeDrawerContent = () => {
  return (
    <View>
      <DrawerContentScrollView style={styles.HeaderIconcontainer}>
        <View>
        <TouchableOpacity>
            <AntDesign name="close" size={iconSizes.lg} color={colors.textSecondary} />

          </TouchableOpacity>
          <TouchableOpacity>
            <Octions name="moon" size={iconSizes.lg} color={colors.textSecondary} />

          </TouchableOpacity>

        </View>

      </DrawerContentScrollView>
    </View>
  )
}

export default CustomeDrawerContent

const styles = StyleSheet.create({

})