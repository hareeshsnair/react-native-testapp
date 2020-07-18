import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import HamburgerMenu from '../components/HamburgerMenu';

const Stack = createStackNavigator();

const DashboardStack = (props) => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={Dashboard} 
            options={{
                title: "Dashboard",
                headerLeft: () => <HamburgerMenu {...props} />
            }}    
        />
    </Stack.Navigator>
)

export default DashboardStack

