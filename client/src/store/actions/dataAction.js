import axios from 'axios';
import { toast } from '../../helpers/swalToast';

const baseUrl = 'https://fathomless-plains-81425.herokuapp.com';

export default () => {
  return async dispatch => {
    try {
      const { data } = await axios(baseUrl + '/all');
      dispatch({
        type: 'ADD_INITIAL_DATA',
        payload: data
      })
    } catch (err) {
      if (err.response) toast.fire({
        icon: 'error',
        title: err.response.data.msg,
      });
    }
  }
}