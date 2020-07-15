import { toast } from '../../helpers/swalToast';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_INITIAL_DATA':
      return action.payload;
    case 'UPDATE_BANNER':
      toast.fire({
        icon: 'success',
        title: 'Update successful',
      });
      let bannerUnupdated = [...state.banner];
      const bannerUpdated = bannerUnupdated.map(element => {
        if (element.id === action.payload.id) {
          return { id: element.id, ...action.payload.data }
        } else {
          return {...element };
        }
      });
      return {...state, banner: bannerUpdated };
    case 'SUBMIT_GRAPHIC':
      toast.fire({
        icon: 'success',
        title: 'Submit successful',
      });
      return {...state, impact: [...state.impact, action.payload] };
    case 'UPDATE_GRAPHIC':
      toast.fire({
        icon: 'success',
        title: 'Update successful',
      });
      let graphicUnupdated = [...state.impact];
      const graphicUpdated = graphicUnupdated.map(element => {
        if (element.id === action.payload.id) {
          return { id: element.id, ...action.payload.data }
        } else {
          return {...element };
        }
      });
      return {...state, impact: graphicUpdated };
    case 'DELETE_GRAPHIC':
      toast.fire({
        icon: 'success',
        title: 'Delete successful',
      });
      let graphicUndeleted = [...state.impact];
      const graphicDeleted = graphicUndeleted.filter(element => element.id !== action.payload.id)
      return {...state, impact: graphicDeleted };
    case 'UPDATE_SOCIAL':
      toast.fire({
        icon: 'success',
        title: 'Update successful',
      });
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