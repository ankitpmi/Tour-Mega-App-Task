import axios from 'axios'
import { API_URL } from '../Config'

class APIhandler {
    constructor() {
        this.axios = axios.create({
            baseURL: API_URL,
        })
    }

    getToursApi = async (place, page) => {
        try {
            const response = await this.axios.get(`tours?lat=${place.lat}&lng=${place.lng}&radius=10&count=20&page=${page}`)
            console.log('RES >> ',response);
            return response.data
        } catch (e) { 
            return Promise.reject(e)
        }
    }
}

const API = new APIhandler()

export default API