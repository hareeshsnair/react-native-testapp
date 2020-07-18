import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

const Statistics = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Statistics screen</Text>
        </View>
    )
}

export default Statistics

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
