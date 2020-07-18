import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Settings = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
            <Button 
                onPress={() => navigation.navigate("Home", {screen:"Dashboard"})}
                title="Go back home"
                />
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})