import { Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, } from 'react-redux'
import * as ImagePicker from 'react-native-image-picker'
import { addNewXeApi } from '../redux/action/xeAction'
import CustomTextInput from './Components/CustomTextInput'
import CustomButton from './Components/CustomButton'

const AddUp = () => {
    const route = useRoute();
    const item = route.params ? route.params.item : null;

    const navigation = useNavigation();

    const [ten_xe_ph30891, setten_xe_ph30891] = useState("")
    const [mau_sac_ph30891, setmau_sac_ph30891] = useState("")
    const [gia_ban_ph30891, setgia_ban_ph30891] = useState("")
    const [mo_ta_ph30891, setmo_ta_ph30891] = useState("")
    const [hinh_anh_ph30891, sethinh_anh_ph30891] = useState("")

    const dispatch = useDispatch();

    const chupAnh = useCallback(() => {
        let options = {
            savePhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true
        }
        ImagePicker.launchCamera(options, sethinh_anh_ph30891)
    });

    const chonAnh = useCallback(() => {
        let options = {
            savePhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true
        }
        ImagePicker.launchImageLibrary(options, sethinh_anh_ph30891);
    })

    const upLoadAnh = async (image) => {
        const fd = new FormData();
        fd.append("image", {
            uri: image.uri,
            type: 'image/jpeg',
            name: 'photo.jpg'
        })
    }
    useEffect(() => {
        if (hinh_anh_ph30891 !== "" && hinh_anh_ph30891.assets) {
            upLoadAnh(hinh_anh_ph30891.assets[0])
        }
    })

    const handleSave = () => {
        if (item === null) {
            const uri = hinh_anh_ph30891.assets[0].uri;
            const newXe = { ten_xe_ph30891, mau_sac_ph30891, gia_ban_ph30891, mo_ta_ph30891, hinh_anh_ph30891: uri };
            dispatch(addNewXeApi(newXe));
        } else {
            if (hinh_anh_ph30891.assets === null) {

            } else {

            }
        }
        navigation.goBack();
    }
    // update
    const setDataUpdate = () => {
       if(item !== null){
        setten_xe_ph30891(item.ten_xe_ph30891);
        setmau_sac_ph30891(item.mau_sac_ph30891);
        setgia_ban_ph30891(item.gia_ban_ph30891);
        setmo_ta_ph30891(item.mo_ta_ph30891);
        const img = { assets: [{ uri: item.hinh_anh_ph30891 }] }
        sethinh_anh_ph30891(img)
       }
    }
    useEffect(() => {
        setDataUpdate()
    },[])
    return (
        <View style={{ flex: 1, padding: 10, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{fontSize:24, fontWeight:'600'}}>Add & Update xe</Text>

            <View style={{ flexDirection: 'row',marginTop:15 }}>
                <TouchableOpacity style={{ width: 100, backgroundColor: '#fe724c', borderRadius: 20, padding: 10, alignItems: 'center', marginRight: 20 }}
                    onPress={() => chonAnh()}>
                    <Text>
                        Chon anh
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 100, backgroundColor: '#fe724c', borderRadius: 20, padding: 10, alignItems: 'center' }}
                    onPress={() => chupAnh()}>
                    <Text>
                        Chup anh
                    </Text>
                </TouchableOpacity>
            </View>

            {hinh_anh_ph30891 !== "" && hinh_anh_ph30891.assets ? (
                <View style={{ borderRadius: 20, overflow: 'hidden', marginVertical:10 }}>
                    <Image
                        source={{ uri: hinh_anh_ph30891.assets[0].uri }}
                        style={{ height: 200, width: 300 }} />
                </View>
            ) : (
                <View style={{marginVertical:10}}>
                    <Text>Chưa chọn ảnh</Text>
                </View>
            )}

            <View style={{ marginTop: 15, width: '100%', alignItems: 'center' }}>
                <CustomTextInput
                    placeholder={"Ten xe"}
                    value={ten_xe_ph30891}
                    onChangeText={setten_xe_ph30891} />

                <CustomTextInput
                    placeholder={"Mau sac"}
                    value={mau_sac_ph30891}
                    onChangeText={setmau_sac_ph30891} />

                <CustomTextInput
                    placeholder={"Gia ban"}
                    value={gia_ban_ph30891}
                    onChangeText={setgia_ban_ph30891} />

                <CustomTextInput
                    placeholder={"Mo ta"}
                    value={mo_ta_ph30891}
                    onChangeText={setmo_ta_ph30891} />

                <CustomButton title={"SAVE"}
                    onPress={() => handleSave()} />
            </View>
        </View>
    )
}

export default AddUp

const styles = StyleSheet.create({})