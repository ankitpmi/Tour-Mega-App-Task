import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import styels from './styles'

const Container = (props) => {
    const { children } = props
    return (
        <SafeAreaView style={styels.SafeAreaStyle}>
            <View {...props}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default Container

const styles = StyleSheet.create({})
