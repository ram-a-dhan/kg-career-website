import axios from 'axios';

const baseUrl = 'https://fathomless-plains-81425.herokuapp.com';

export default () => {
  return async dispatch => {
    try {
      const { data } = await axios(baseUrl + '/all');
      dispatch({
        type: 'ADD_INITIAL_DATA',
        payload: data
      })
    } catch (err) {
      dispatch({
				type: 'ERROR_TOAST',
				payload: err
			})
    }
  }
}