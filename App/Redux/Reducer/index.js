import { combineReducers } from 'redux';
import tours from './tours.reducer'

const rootReducer = combineReducers ({
    tours
})
export default rootReducer;