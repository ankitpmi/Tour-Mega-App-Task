import React from 'react'
import { View } from 'react-native'
import { Text } from '../index'
import styles from "./styles";

const Header = (props) => {
    const { title, leftContainer, rightContainer } = props
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.column, {width: '15%'}]} >
                {leftContainer}
            </View>
            <View style={[styles.column, {width: '70%'}]} >
                <Text style={styles.title} >{title}</Text>
            </View>
            <View style={[styles.column, {width: '15%'}]} >
                {rightContainer}
            </View>
        </View>
    )
}

export default Header
