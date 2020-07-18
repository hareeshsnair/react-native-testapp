import React, { useEffect, useState, useCallback } from 'react'
import { StyleSheet, Text, View, Button, RefreshControl, ScrollView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card, Title, Paragraph, List, Divider } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';
import { useAxios,useAxiosInterval } from 'use-axios-hooks'
import useApi from '../hooks/useApi';

const Tab = createMaterialTopTabNavigator();

const CountryView = ({onRefresh, refreshing, cancel}) => {

    const data = [
        { title: "Confirmed", number: '908258', delta: '25330', color: '#FF073A' },
        { title: "Active", number: '311858', delta: '7340', color: '#007BFF' },
        { title: "Recovered", number: '572280', delta: '13456', color: '#28A745' },
        { title: "Deceased", number: '23736', delta: '530', color: '#6C757D' }
    ]
    const states = [
        { name: "Maharashtra", confirmed: '8258', active:'4333', recovered: '4235', deceased: '27', delta: '330', color: '#FF073A' },
        { name: "Tamil Nadu", confirmed: '8258', active:'4333', recovered: '4235', deceased: '27', delta: '7340', color: '#007BFF' },
        { name: "Delhi", confirmed: '8258', active:'4333', recovered: '4235', deceased: '27', delta: '13456', color: '#28A745' },
        { name: "Kerala", confirmed: '8258', active:'4333', recovered: '4235', deceased: '27', delta: '530', color: '#6C757D' },
        { name: "Gujarat", confirmed: '8258', active:'4333', recovered: '4235', deceased: '27', delta: '330', color: '#FF073A' },
        { name: "Telengana", confirmed: '8258', active:'4333', recovered: '4235', deceased: '27', delta: '7340', color: '#007BFF' },
        { name: "Bihar", confirmed: '8258', active:'4333', recovered: '4235', deceased: '27', delta: '13456', color: '#28A745' },
        { name: "Rajastan", confirmed: '8258', active:'4333', recovered: '4235', deceased: '27', delta: '530', color: '#6C757D' },
        { name: "Karnataka", confirmed: '8258', active:'4333', recovered: '4235', deceased: '27', delta: '530', color: '#6C757D' }
    ];

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <View style={{ flex:1 }}>
                <FlatGrid 
                    data={data}
                    itemDimension={120}
                    spacing={15}
                    style={styles.gridView}
                    renderItem={({item}) => {
                        return(
                            <Card onPress={cancel}>
                                <Card.Content>
                                    <View style={styles.dataNumber}>
                                        <Title style={{color: item.color}}>{item.number}</Title>
                        <Paragraph style={{color: item.color, fontWeight: 'bold'}}>+{item.delta}</Paragraph>
                                    </View>
                                    <Paragraph style={{color: item.color, fontWeight: 'bold'}}>{item.title}</Paragraph>
                                </Card.Content>
                            </Card>
                        )
                    }}
                />
            </View>
            
            <View style={{ flex:1 }}>
                <List.Section style={{
                    marginLeft:15, 
                    marginRight: 15,
                    marginTop: 0,
                    backgroundColor: '#fff',
                    borderRadius:5,
                    }}>
                    {
                        states.map(state => (
                            <React.Fragment key={state.name}>
                                <List.Accordion
                                title={state.name}
                                key={state.name}
                                titleStyle={styles.accordionTitle}
                                >
                                    
                                    {/* <Card> */}
                                        <Card.Content style={styles.accordionCardContent}>
                                            <View style={styles.accordionContentContainer}>
                                                <Paragraph style={styles.accordionContentTitle}>Confirmed</Paragraph>
                                                <Paragraph style={styles.accordionContentNumber}>+{state.delta}</Paragraph>
                                                <Paragraph style={styles.accordionContentNumber}>{state.confirmed}</Paragraph>
                                            </View>
                                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                                <Paragraph style={styles.accordionContentTitle}>Active</Paragraph>
                                                <Paragraph style={styles.accordionContentNumber}>+{state.delta}</Paragraph>
                                                <Paragraph style={styles.accordionContentNumber}>{state.active}</Paragraph>
                                            </View>
                                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                                <Paragraph style={styles.accordionContentTitle}>Recovered</Paragraph>
                                                <Paragraph style={styles.accordionContentNumber}>+{state.delta}</Paragraph>
                                                <Paragraph style={styles.accordionContentNumber}>{state.recovered}</Paragraph>
                                            </View>
                                            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                                <Paragraph style={styles.accordionContentTitle}>Deceased</Paragraph>
                                                <Paragraph style={styles.accordionContentNumber}>+{state.delta}</Paragraph>
                                                <Paragraph style={styles.accordionContentNumber}>{state.deceased}</Paragraph>
                                            </View>
                                        </Card.Content>
                                    {/* </Card> */}
                            </List.Accordion>
                            <Divider />
                            </React.Fragment>
                        ))
                    }
                
                </List.Section>
            </View>
        </ScrollView>
    )
}

const StateView = () => {
    return (
        <View>
            <Text>StateView</Text>
        </View>
    )
}

const Dashboard = ({navigation}) => {
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        console.log("effect")
        
    },[])

    const fetchApi = () => {console.log("fetching api...")
        return useAxios({
        url: 'https://api.covid19india.org/v3/min/data.min.json',
        method: 'GET'
    })
}

    const [{data, isLoading, error, isCanceled}] = fetchApi()
    console.log("response", data && data.data)
    console.log("error", error)
    console.log("loading", isLoading)

    const onRefresh = React.useCallback(() => {
        // setRefreshing(true);
    
        console.log("refreshing")
        setRefreshing(false)
      }, []);
    // console.log("nolm",res)
    return (
        <Tab.Navigator>
            <Tab.Screen name="India" component={CountryView} cancel={() => cancel()} refreshing={refreshing} onRefresh={onRefresh} />
            <Tab.Screen name="State" component={StateView} />
        </Tab.Navigator>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    border: {
        borderStyle: 'solid', 
        borderColor: 'black', 
        borderWidth: 1
    },
    dataNumber: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%'
    },
    accordionTitle: {
        color:'grey', 
        fontWeight: 'bold'
    },
    accordionCardContent: {
        paddingLeft: 25, 
        paddingRight: 25, 
        paddingBottom: 10
    },
    accordionContentContainer: {
        flexDirection:'row',
        alignItems:'center'
    },
    accordionContentTitle: {
        flex:2,
        color:'grey', 
        fontWeight: 'bold'
    },
    accordionContentNumber: { 
        flex:1,
        textAlign: 'right',
        color: 'grey',
        fontWeight: '600'
    }
})
