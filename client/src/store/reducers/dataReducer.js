import { toast } from '../../helpers/swalToast';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_INITIAL_DATA':
      return action.payload;
    case 'SUBMIT_GRAPHIC':
      toast.fire({
        icon: 'success',
        title: 'Submit successful',
      });
      return action.payload;
    case 'UPDATE_SOCIAL':
      toast.fire({
        icon: 'success',
        title: 'Update successful',
      });
      return action.payload;
    default:
      return state;
  }
};