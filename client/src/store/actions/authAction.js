import axios from 'axios';
import { toast } from '../../helpers/swalToast';

export const login = (credentials) => {
  try {
    return async (dispatch) => {
      const response = await axios({
        method: 'POST',
        url: 'https://fathomless-plains-81425.herokuapp.com/user/login',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: credentials,
      });
      const result = await response.json();
      dispatch({
        type: 'LOGIN',
        payload: result,
      }); 
    };
  // eslint-disable-next-line
  } catch (err) {
    toast.fire({
      icon: 'error',
      title: err.msg,
    });
  }
};

export const logout = () => {
    return (dispatch) => {
      dispatch({
        type: 'LOGOUT',
      }); 
    };
};