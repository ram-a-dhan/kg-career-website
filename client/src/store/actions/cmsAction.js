import axios from 'axios';
import { toast } from '../../helpers/swalToast';

export const updateSocial = (id, updatedData) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios({
        method: 'PUT',
        url: 'https://fathomless-plains-81425.herokuapp.com/home/social/' + id,
        data: updatedData,
        headers: {
          token: localStorage.access_token
        }
      });
      if (response) {
        let newData = getState().dataReducer;
        newData.social.forEach(datum => {
          if (datum.id === id) datum.link = updatedData.link
        });
        
        dispatch({
          type: 'UPDATE_SOCIAL',
          payload: newData,
        })
      }
    } catch (error) {
      toast.fire({
        icon: 'error',
        title: error.response.data.msg,
      });
    }
  }
}
