import axios from 'axios'
import { GOOGLE_API_KEY } from '../Config'

const findLatLan = async(place) => {
    try {
        let response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&key=${GOOGLE_API_KEY}`)                        
        return response
    } catch (e) {
        return Promise.reject(e)
    }
}

export {findLatLan}