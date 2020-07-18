import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Statistics from '../screens/Statistics';
import HamburgerMenu from '../components/HamburgerMenu';

const Stack = createStackNavigator();

const StatisticsStack = (props) => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={Statistics} 
            options={{
                title: "Statistics",
                headerLeft: () => <HamburgerMenu {...props} />
            }}    
        />
    </Stack.Navigator>
)

export default StatisticsStack

