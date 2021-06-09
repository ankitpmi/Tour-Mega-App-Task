import { actionTypes } from './actionType';
import API from '../../Api'

const getToursType = actionTypes('GET_TOURS');

export const getToursAction = (place, page) => {
  return async (dispatch) => {
    dispatch({
      type: getToursType.REQUEST,
    });        
    try {
      let response = await API.getToursApi(place, page)  
      if(response.success){
        dispatch({
          type: getToursType.SUCCESS,
          payload: { data: response.data , page : page, loadNext : response.data ? response.data.length >= 20 : true }
        });
      }else{
        dispatch({
          type: getToursType.FAILURE,
        });
      }
    } catch (error) {
      console.log('getToursAction >>', error);
      dispatch({
        type: getToursType.FAILURE,
      });
    }
  };
};
