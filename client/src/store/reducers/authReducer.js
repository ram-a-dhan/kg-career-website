import { toast } from '../../helpers/swalToast';

const authReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('access_token', action.payload.access_token);
      toast.fire({
        icon: 'success',
        title: 'Login successful',
      });
      return true;
    case 'LOGOUT':
      localStorage.removeItem('access_token');
      toast.fire({
        icon: 'success',
        title: 'Logout successful',
      });
      return false;
    default:
      return state;
  }
};

export default authReducer;