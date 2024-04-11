import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <View style={{width:'100%',borderRadius:20,overflow:'hidden',borderWidth:1.5, borderColor:'#fe724c'}}>
        <Image source={require('../../assets/banner.jpg')} style={{width:'100%',height:200}}/>
    
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})