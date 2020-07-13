import { toast } from '../../helpers/swalToast';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_INITIAL_DATA':
      return action.payload;
    case 'ADD_GRAPH':
      return {...state, impact: [...state.impact, action.payload]};
    case 'SUBMIT_GRAPHIC':
      toast.fire({
        icon: 'success',
        title: 'Submit successful',
      });
      return {...state, state: action.payload};
    case 'UPDATE_SOCIAL':
      toast.fire({
        icon: 'success',
        title: 'Update successful',
      });
      return {...state, state: action.payload};
    case 'ERROR_TOAST':
      let msg = '';
      if (action.payload.response) {
        if (Array.isArray(action.payload.response.data.msg)) {
          msg = action.payload.response.data.msg.join('<br>');
        } else {
          msg = action.payload.response.data.msg;
        }
      } else if (action.payload.request) {
        msg = action.payload.request;
      } else {
        msg = action.payload.message;
      }
      toast.fire({
        icon: 'error',
        title: msg,
      });
      return state
    default:
      return state;
  }
};