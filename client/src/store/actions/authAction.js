export const login = (credentials) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN',
      payload: credentials,
    }); 
  };
};

export const logout = () => {
    return (dispatch) => {
      dispatch({
        type: 'LOGOUT',
      }); 
    };
};