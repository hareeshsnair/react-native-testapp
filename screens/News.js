import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const News = () => {
    return (
        <View style={styles.container}>
            <Text>News screen</Text>
        </View>
    )
}

export default News

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
