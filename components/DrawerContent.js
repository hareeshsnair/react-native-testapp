import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import { config } from '../constants/config';
import { icons } from '../constants/icons';

const DrawerContent = (props) => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.header}>

                </View>
                <View style={styles.menu}>
                    <DrawerItem
                        label="Home"
                        icon={({color, size}) => (<Ionicons name={icons.dashboard} size={size} color={color} />)}
                        onPress={() => props.navigation.navigate("Dashboard")}
                    />
                    <DrawerItem
                        label="Settings"
                        icon={({color, size}) => (<Ionicons name={icons.settings} size={size} color={color} />)}
                        onPress={() => props.navigation.navigate("Settings")}
                    />
                </View>
            </DrawerContentScrollView>
            
            <Drawer.Section style={styles.drawerBottomSection}>
                <View style={styles.bottomContent}>
                    <Text>From</Text>
                    <Text>H A R E E S H</Text>
                </View>
            </Drawer.Section>
        </View>
    );
}

export default DrawerContent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawerBottomSection: {
    //   marginBottom: 15,

    },
    bottomContent: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10
    },
    header: {
        backgroundColor: 'grey',
        height: 50
    },
    menu: {
        paddingLeft:5
    },
});  