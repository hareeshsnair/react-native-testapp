import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { icons } from '../constants/icons';
import { config } from '../constants/config';

const HamburgerMenu = ({navigation}) => {
    return (
        <View style={styles.menu}>
            <Ionicons 
                name={icons.menu} 
                size={config.ICON_SIZE_DEFAULT} 
                color={config.ICON_COLOR_DEFAULT}
                onPress={() => navigation.toggleDrawer()}    
            />
        </View>
    )
}

export default HamburgerMenu

const styles = StyleSheet.create({
    menu: {
        marginLeft: 20
    }
})
