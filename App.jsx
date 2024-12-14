import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/StackNavigation";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

const Stack = createNativeStackNavigator();
const App = () => {
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
