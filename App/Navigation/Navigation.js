import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SearchPlace from "../Screens/SearchPlace";
import ToursList from "../Screens/TourList";
import { Colors } from '../Theme'
import { View, Text } from 'react-native'
const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: Colors.white,
                shadowColor: Colors.black,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            },                       
            headerBackTitleVisible: false,
            headerTitleStyle: {color : Colors.primary}
        }} >
            <Stack.Screen name="SearchPlace" component={SearchPlace} options={{headerTitle : 'Search'}} />
            <Stack.Screen name="ToursList" component={ToursList} options={{headerTitle : 'Tour List'}} />
        </Stack.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}

export default Navigation
