import { toast } from '../../helpers/swalToast';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_INITIAL_DATA':
      return action.payload;
    case 'UPDATE_BANNER':
      return {...state, banner: action.payload };
    case 'SUBMIT_GRAPHIC':
      return {...state, impact: [...state.impact, action.payload] };
    case 'UPDATE_GRAPHIC':
      return {...state, impact: action.payload };
    case 'UPDATE_TESTIMONIAL':
      return {...state, testimonial: action.payload };
    case 'SUBMIT_TESTIMONIAL':
      return {...state, testimonial: [...state.testimonial, action.payload] };
    case 'DELETE_TESTIMONIAL':
      return {...state, testimonial: action.payload };
    case 'DELETE_GRAPHIC':
      return {...state, impact: action.payload };
    case 'UPDATE_SOCIAL':
      return {...state, state: action.payload };
    case 'UPDATE_NAVBAR':
      return {...state, state: action.payload };
    case 'ERROR_TOAST':
      let msg = '';
      if (action.payload.response) {
        if (Array.isArray(action.payload.response.data.msg)) {
          msg = action.payload.response.data.msg.join('<br>');
        } else {
          msg = action.payload.response.data.msg;
        }
      } else if (action.payload.message) {
        msg = action.payload.message;
      } else {
        msg = action.payload.request;
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