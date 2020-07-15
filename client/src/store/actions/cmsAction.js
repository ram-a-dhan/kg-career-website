import axios from 'axios';

export const graphicAdd = (payload, history) => {
  return async(dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: 'https://fathomless-plains-81425.herokuapp.com/home/impact',
        data: payload,
        headers: {
          token: localStorage.access_token,
          'content-type': 'multipart/form-data'
        },
      });
      dispatch({
        type: 'SUBMIT_GRAPHIC',
        payload: data
      })
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error
      })
    }
  }
};

export const graphicEdit = (payload, id, history) => {
  return async(dispatch, getState) => {
    try {
      const { data } = await axios({
        method: 'PUT',
        url: 'https://fathomless-plains-81425.herokuapp.com/home/impact/' + id,
        data: payload,
        headers: {
          token: localStorage.access_token,
          'content-type': 'multipart/form-data'
        },
      });
      dispatch({
        type: 'UPDATE_GRAPHIC',
        payload: { id, data }
      });
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error
      })
    }
  }
};

export const bannerEdit = (payload, prevData, history) => {
  return async(dispatch, getState) => {
    try {
      let apiURL = '';
      if (prevData.name === 'Top Banner') apiURL = 'https://fathomless-plains-81425.herokuapp.com/home/topbanner';
      else if (prevData.name === 'Who We Are') apiURL = 'https://fathomless-plains-81425.herokuapp.com/home/whoweare';
      else if (prevData.name === 'Join Us') apiURL = 'https://fathomless-plains-81425.herokuapp.com/joinus';
      const { data } = await axios({
        method: 'PUT',
        url: apiURL,
        data: payload,
        headers: {
          token: localStorage.access_token,
          'content-type': 'multipart/form-data'
        },
      });
      dispatch({
        type: 'UPDATE_BANNER',
        payload: {
          id: prevData.id,
          data: {
            name: prevData.name,
            title: prevData.title,
            subtitle: prevData.subtitle,
            banner_path: data.url,
          }
        }
      })
      history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error
      })
    }
  }
};

export const updateSocial = (id, updatedData) => {
  return async(dispatch, getState) => {
    try {
      const response = await axios({
        method: 'PUT',
        url: 'https://fathomless-plains-81425.herokuapp.com/home/social/' + id,
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
      }
    } catch (error) {
      dispatch({
        type: 'ERROR_TOAST',
        payload: error
      })
    }
  };
};