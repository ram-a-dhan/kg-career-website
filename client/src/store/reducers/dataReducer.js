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
      return {...state, impact: [...state.impact, action.payload]};
      case 'UPDATE_GRAPHIC':
        toast.fire({
          icon: 'success',
          title: 'Update successful',
        });
        let temp = [...state.impact];
        const newImpact = temp.map(element => {
          if (element.id === action.payload.id) {
            return { id: element.id, ...action.payload.data }
          } else {
            return { ...element };
          }
        });
        // console.log('NEWIMPACT', newImpact);
        return {...state, impact: newImpact };
        //////////////////
        // let newState = {...state};
        // newState.impact = newState.impact.map(element => {
        //   if (element.id === action.payload.id) return { id: element.id, ...action.payload.data }
        // });
        // return newState;
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