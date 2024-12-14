import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigation from './StackNavigation';
import CustomeDrawerContent from './CustomeDrawerContent';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
   <Drawer.Navigator 
   defaultStatus='open'
   screenOptions={{
    headerShown: false,
    drawerType :"slide",
  }}
  drawerContent={(props) => <CustomeDrawerContent {...props} />}
   >
    <Drawer.Screen name="Home" component={StackNavigation} />
   </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({

})