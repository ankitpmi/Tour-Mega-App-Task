import React from 'react'
import { View, Text, TextInput as RNTextInput } from 'react-native'
import styles from "./styles";

const TextInput = (props) => {
    const {  } = props
    return (
        <View>
            <RNTextInput
                {...props}
                style = {styles.inputStyle}
            />
        </View>
    )
}

export default TextInput
