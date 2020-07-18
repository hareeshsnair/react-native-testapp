import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import News from '../screens/News';
import { icons } from '../constants/icons';
import DashboardStack from '../navigation/DashboardStack';
import { config } from '../constants/config';
import StatisticsStack from '../navigation/StatisticsStack';

const Tabs = createBottomTabNavigator();

const HomeScreenBottomTabs = () => {
    return (
        <Tabs.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = icons[route.name.toLowerCase()];
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
            activeTintColor: config.ICON_COLOR_ACTIVE,
            inactiveTintColor: config.ICON_COLOR_DEFAULT,
          }}>
            <Tabs.Screen name={"Dashboard"} component={DashboardStack} />
            <Tabs.Screen name={"Statistics"} component={StatisticsStack} />
            <Tabs.Screen name={"News"} component={News} />
        </Tabs.Navigator>
    )
}

export default HomeScreenBottomTabs

const styles = StyleSheet.create({})
