import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/StackNavigation";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import TrackPlayer from 'react-native-track-player';
const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(()=>{
    setupPlayer();

    })
  const setupPlayer = async ()=>{
    await TrackPlayer.setupPlayer();

  }
  return (
    <GestureHandlerRootView  
    style={{flex :1}}
    >
      <NavigationContainer>
        <DrawerNavigator/>
         
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
