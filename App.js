import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';

import Settings from './screens/Settings';
import HomeScreenBottomTabs from './components/HomeScreenBottomTabs';
import DrawerContent from './components/DrawerContent';

enableScreens();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={HomeScreenBottomTabs} />
      <Drawer.Screen name="Settings" component={ Settings } />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

