import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigation from './StackNavigation';
import { colors } from '../screen/constants/colors';
import CustomeDrawerContent from './CustomeDrawerContent';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
   <Drawer.Navigator 
   screenOptions={{
    headerShown: false,
    // drawerType :"slide",
    drawerStyle: {
      backgroundColor: colors.background,
      width: 200,
      },
  }}
  drawerContent={(props)=><CustomeDrawerContent{...props}/>}

   >
    <Drawer.Screen name="Home" component={StackNavigation} />
   </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})