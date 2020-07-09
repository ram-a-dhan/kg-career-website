const authReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('access_token','test123');
      console.log('Login Successful!');
      return true;
    case 'LOGOUT':
      localStorage.removeItem('access_token');
      console.log('Logout Successful!');
      return false;
    default:
      return state;
  }
};

export default authReducer;