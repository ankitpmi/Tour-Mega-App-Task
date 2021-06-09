import React, { useState } from 'react'
import { View, Pressable } from 'react-native'
import styles from './styles';
import { Container, Text, Header } from "../../Component";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "../../Config";
import {findLatLan} from '../../Utils';


const SearchPlace = ({navigation}) => {
    const [place, setPlace] = useState({})    
    const getLatLong = async(place) => {        
        try {
            let res = await findLatLan(place)
            setPlace(res.data.result.geometry.location)
        } catch (error) {
            console.log('ERROR >> ',error);
        }
    }
    
    return (
        <Container style={{flex: 1}}>
            <Header title='Search' />
            <View style={styles.mainContainer} >
            <View style={{ height: 'auto', position: 'absolute', width: '100%', zIndex : 15 }}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {                        
                        getLatLong(data)
                    }}                    
                    onFail={(error) => console.log('error >>> ', error)}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'en',
                    }}
                    styles={{
                        textInputContainer: {
                            //   backgroundColor: 'red',
                            width: '95%',
                            alignSelf: 'center'
                        },
                        textInput: {
                            height: 60,
                            color: '#5d5d5d',
                            fontSize: 16,
                            borderRadius: 12,
                            borderWidth: 1
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                        },
                    }}
                />
            </View>
            
            <Pressable onPress={() => navigation.navigate('ToursList', {place})} style={styles.nextBtn} >
                <Text style={styles.nextBtnText}>Next</Text>
            </Pressable>
            </View>
        </Container>
    )
}

export default SearchPlace


