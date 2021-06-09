const initialState = {
    data: { name: 'ankit' },
    toursData: [],
    isLoading: false,
    loadNext : true
}
import { actionTypes } from '../Action/actionType';
const getToursType = actionTypes('GET_TOURS');

const tours = (state = initialState, action) => {
    const { payload, type } = action;    
    switch (action.type) {
        case getToursType.REQUEST:
            return { ...state, isLoading: true  }
        case getToursType.SUCCESS:
            return { ...state, isLoading: false, toursData: payload.page ===1 ? payload.data : [...state.toursData,...payload.data], loadNext : payload.loadNext  }
        case getToursType.FAILURE:
            return { ...state, isLoading: false , loadNext : false }
        default:
            return state;
    }
}

export default tours;
