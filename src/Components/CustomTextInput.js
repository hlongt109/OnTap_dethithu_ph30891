import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CustomTextInput = ({ style, ...restProp }) => {
    const [isForcus, setisForcus] = useState(false)

    const handleFocus = () => {
        setisForcus(true);
    }

    const handleBlur = () => {
        setisForcus(false);
    }

    return (
        <TextInput {...restProp}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={[st.input , style, isForcus && st.focusedInput]}/>
    )
}

export default CustomTextInput

const st = StyleSheet.create({
    input:{
        padding: 15,marginBottom: 15,
        borderWidth:1.5,
        borderColor:"#b6b5bd",
        borderRadius: 15,
        width:'100%',
        fontSize: 16,
        color: "#444"
    },
})