import axios from 'axios';

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://fathomless-plains-81425.herokuapp.com/user/login',
        // url: 'http://localhost:3000/user/login',
        data: credentials,
      });
      dispatch({
        type: 'LOGIN',
        payload: response,
      }); 
      // eslint-disable-next-line
    } catch (error) {
      dispatch({
				type: 'ERROR_TOAST',
				payload: error
			})
    }
  };
};

export const logout = () => {
    return (dispatch) => {
      dispatch({
        type: 'LOGOUT',
      }); 
    };
};