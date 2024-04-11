import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { deleteXeApi, fetchXeApi } from '../../redux/action/xeAction';
import {useNavigation} from '@react-navigation/native'

const CustomList = () => {
    const navigation = useNavigation();

    const listXe = useSelector(state => state.listXe.listXe);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchXeApi())
    }, [dispatch])

    
    const renderItem = ({ item }) => (
        <View >
            <View style={{flexDirection: 'row', padding: 10, borderBottomWidth: 1,borderBottomColor: '#ccc',}}>
                <Image source={{ uri: item.hinh_anh_ph30891 }} style={{ width: 100,height: 100, marginRight: 10, resizeMode: 'cover'}} />
                <View style={{flex: 1}}>
                    <Text style={{ fontSize: 18,fontWeight: 'bold'}}>{item.ten_xe_ph30891}</Text>
                    <Text style={{fontSize: 16,color: '#666'}}>{item.mau_sac_ph30891}</Text>
                    <Text style={{ fontSize: 16, color: 'green'}}>{item.gia_ban_ph30891}</Text>
                    <Text style={{fontSize: 14,color: '#999'}}>{item.mo_ta_ph30891}</Text>
                </View>
                <View>
                    <Text onPress={()=> {dispatch(deleteXeApi(item.id))}}>Xoa</Text>
                    <Text onPress={()=>{
                        navigation.navigate("AddUp",{item: item})
                    }}>Sua</Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={{ width: '100%', paddingTop: 10 }}>
            <FlatList
                nestedScrollEnabled={true}
                scrollEnabled={false}
                data={listXe}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CustomList

const styles = StyleSheet.create({})