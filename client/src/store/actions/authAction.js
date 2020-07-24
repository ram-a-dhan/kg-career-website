import axios from 'axios';

const baseUrl = 'http://dev.growwithkg.id';

export const login = (credentials, setIsLoading) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: 'POST',
        url: baseUrl + '/user/login',
        data: credentials,
      });
      dispatch({
        type: 'LOGIN',
        payload: response,
      }); 
      setIsLoading(false);
      // eslint-disable-next-line
    } catch (error) {
      dispatch({
				type: 'ERROR_TOAST',
				payload: error
			})
      setIsLoading(false);
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