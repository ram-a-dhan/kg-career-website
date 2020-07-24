import axios from 'axios';
import { toast } from '../../helpers/swalToast';

const baseUrl = 'https://dev.growwithkg.id';
// const baseUrl = 'https://fathomless-plains-81425.herokuapp.com';

export const graphicAdd = (payload, history, setIsLoading) => {
  return async(dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: baseUrl + '/home/impact',
        data: payload,
        headers: {
          token: localStorage.access_token,
          'content-type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      });
      dispatch({
        type: 'SUBMIT_GRAPHIC',
        payload: data
      })
      toast.fire({
        icon: 'success',
        title: 'Submit successful',
      });
      setIsLoading(false);
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error
      })
      setIsLoading(false);
    }
  }
};

export const graphicEdit = (payload, id, history, graphicReducer, setIsLoading) => {
  return async(dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'PUT',
        url: baseUrl + '/home/impact/' + id,
        data: payload,
        headers: {
          token: localStorage.access_token,
          'content-type': 'multipart/form-data'
        },
      });
      let graphicUnupdated = [...graphicReducer];
      const graphicUpdated = graphicUnupdated.map(element => {
        if (element.id === id) {
          return { id, ...data }
        } else {
          return {...element };
        }
      });
      dispatch({
        type: 'UPDATE_GRAPHIC',
        payload: graphicUpdated
      });
      toast.fire({
        icon: 'success',
        title: 'Update successful',
      });
      setIsLoading(false);
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error
      })
      setIsLoading(false);
    }
  }
};

export const graphicDelete = (id, graphicReducer) => {
  return async(dispatch) => {
    try {
      const response = await axios({
        method: 'DELETE',
        url: baseUrl + '/home/impact/' + id,
        headers: {
          token: localStorage.access_token,
        },
      });
      if (response.data.msg === 'Success') {
        let graphicUndeleted = [...graphicReducer];
        const graphicDeleted = graphicUndeleted.filter(element => element.id !== id)
        dispatch({
          type: 'DELETE_GRAPHIC',
          payload: graphicDeleted
        })
        toast.fire({
          icon: 'success',
          title: 'Delete successful',
        });
      }
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error,
      })
    }
  }
}

export const testimonialEdit = (formData, payload, history, testimonialReducer, setIsLoading) => {
  return async(dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'PUT',
        url: baseUrl + '/home/testimonial/' + payload.id,
        data: formData,
        headers: {
          token: localStorage.access_token,
          'content-type': 'multipart/form-data'
        },
      });
      let testimonialUnupdated = [...testimonialReducer];
      const testimonialUpdated = testimonialUnupdated.map(element => {
        if (element.id === payload.id) {
          return {
            id: payload.id,
            title: payload.title,
            message: payload.message,
            name: payload.name,
            position: payload.position,
            photo_path: data.url
          }
        } else {
          return {...element };
        }
      });
      dispatch({
        type: 'UPDATE_TESTIMONIAL',
        payload: testimonialUpdated
      });
      toast.fire({
        icon: 'success',
        title: 'Update successful',
      });
      setIsLoading(false);
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error,
      })
      setIsLoading(false);
    }
  }
};

export const testimonialAdd = (payload, history, setIsLoading) => {
  return async(dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: baseUrl + '/home/testimonial',
        data: payload,
        headers: {
          token: localStorage.access_token,
          'content-type': 'multipart/form-data'
        },
      });
      dispatch({
        type: 'SUBMIT_TESTIMONIAL',
        payload: data
      })
      toast.fire({
        icon: 'success',
        title: 'Submit successful',
      });
      setIsLoading(false);
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error
      })
      setIsLoading(false);
    }
  }
}

export const testimonialDelete = (id, testimonialReducer) => {
  return async(dispatch) => {
    try {
      const response = await axios({
        method: 'DELETE',
        url: baseUrl + '/home/testimonial/' + id,
        headers: {
          token: localStorage.access_token,
        },
      });
      if (response.data.msg === 'Success') {
        let testimonialUndeleted = [...testimonialReducer];
        const testimonialDeleted = testimonialUndeleted.filter(element => element.id !== id)
        dispatch({
          type: 'DELETE_TESTIMONIAL',
          payload: testimonialDeleted
        })
        toast.fire({
          icon: 'success',
          title: 'Delete successful',
        });
      }
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error,
      })
    }
  }
}

export const bannerEdit = (payload, prevData, history, bannerReducer, setIsLoading) => {
  return async(dispatch, getState) => {
    try {
      let apiURL = '';
      if (prevData.name === 'Top Banner') apiURL = baseUrl + '/home/topbanner';
      else if (prevData.name === 'Who We Are') apiURL = baseUrl + '/home/whoweare';
      else if (prevData.name === 'Join Us') apiURL = baseUrl + '/joinus';
      const { data } = await axios({
        method: 'PUT',
        url: apiURL,
        data: payload,
        headers: {
          token: localStorage.access_token,
          'content-type': 'multipart/form-data'
        },
      });
      let bannerUnupdated = [...bannerReducer];
      const newData = {
        name: prevData.name,
        title: prevData.title,
        subtitle: prevData.subtitle,
        banner_path: data.url,
      }
      const bannerUpdated = bannerUnupdated.map(element => {
        if (element.id === prevData.id) {
          return { id: element.id, ...newData }
        } else {
          return {...element };
        }
      });
      dispatch({
        type: 'UPDATE_BANNER',
        payload: bannerUpdated
      })
      toast.fire({
        icon: 'success',
        title: 'Update successful',
      });
      setIsLoading(false);
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error
      })
      setIsLoading(false);
    }
  }
};

export const updateSocial = (id, updatedData, history, setIsLoading) => {
  return async(dispatch, getState) => {
    try {
      const response = await axios({
        method: 'PUT',
        url: baseUrl + '/home/social/' + id,
        data: updatedData,
        headers: {
          token: localStorage.access_token,
        },
      });
      if (response) {
        let newData = getState().dataReducer;
        newData.social.forEach((datum) => {
          if (datum.id === id) datum.link = updatedData.link;
        });
        dispatch({
          type: 'UPDATE_SOCIAL',
          payload: newData,
        });
        toast.fire({
          icon: 'success',
          title: 'Update successful',
        });
        setIsLoading(false);
        history.push('/dashboard');
      }
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error
      })
      setIsLoading(false);
    }
  };
};