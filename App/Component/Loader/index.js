import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from "./styles";
import { Colors } from '../../Theme'

const Loader = () => {
    return (
        <View style = {styles.mainContainer}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    )
}

export default Loader
