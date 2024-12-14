import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../screen/constants/colors';
import { FontSize, iconSizes, spacing } from '../screen/constants/dimensions';
import { fontFamilies } from '../screen/constants/fonts';

const CustomDrawerContent = (props) => {
  const isDarkMode = true;
  const toggleDrawer = ()=>{
    props.navigation.toggleDrawer();
  }

  return (
    <DrawerContentScrollView style={styles.container}>
      {/* Header Icons */}
      <View style={styles.headerIconContainer}>
        <TouchableOpacity onPress={toggleDrawer}>
          <AntDesign name="close" size={iconSizes.lg} color={colors.iconPrimary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons
            name={isDarkMode ? 'sun' : 'moon'}
            size={iconSizes.lg}
            color={colors.iconPrimary}
          />
        </TouchableOpacity>
      </View>

      {/* Drawer Items */}
      <View style={styles.drawerIconContainer}>
      <DrawerItem
          label="Profile"
          icon={() => (
            <FontAwesome name="user" size={iconSizes.md} color={colors.iconPrimary} />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Liked Songs"
          icon={() => (
            <MaterialIcons name="favorite" size={iconSizes.md} color={colors.iconPrimary} />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Home', { screen: 'LIKE_SCREEN' })} // Nested StackNavigator screen
        />
        <DrawerItem
          label="Language"
          icon={() => (
            <MaterialIcons name="language" size={iconSizes.md} color={colors.iconPrimary} />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Language')}
        />
        <DrawerItem
          label="Contact Us"
          icon={() => (
            <AntDesign name="phone" size={iconSizes.md} color={colors.iconPrimary} />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('ContactUs')}
        />
          <DrawerItem
          label="FAQs"
          icon={() => (
            <AntDesign name="questioncircle" size={iconSizes.md} color={colors.iconPrimary} />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('FAQs')}
        />
        <DrawerItem
          label="Settings"
          icon={() => (
            <AntDesign name="setting" size={iconSizes.md} color={colors.iconPrimary} />
          )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate('Settings')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.sm,
  },
  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  drawerIconContainer: {

  },
  labelStyle: {
    fontSize: FontSize.md,
    color: colors.textPrimary,
    fontFamily: fontFamilies.medium,
  

  },
  drawerItem: {
    borderRadius: 8,
    backgroundColor: colors.drawerItemBackground,
  },
});
