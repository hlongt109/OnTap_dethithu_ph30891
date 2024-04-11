import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Banner from './Components/Banner'
import CustomList from './Components/CustomList'
import {useNavigation} from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Banner />
            <ScrollView>
                <CustomList />
            </ScrollView>

            <TouchableOpacity style={{ width: 50, height: 50, position: 'absolute', right: 10, bottom: 10, backgroundColor: '#fe724c', justifyContent: 'center', alignItems: 'center', borderRadius:25}}
                onPress={() => navigation.navigate("AddUp")}>
                <Text style={{color:'#FFF'}}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})