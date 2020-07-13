import axios from 'axios';

export const graphicAdd = (data) => {
	return (dispatch, getState) => {
		let newData = getState().dataReducer;
		newData.impact = [...newData.impact, newData.impact.push(data)];
			dispatch({
				type: 'SUBMIT_GRAPHIC',
				payload: newData
			})
		}
	// return async (dispatch, getState) => {
  //   try {
  //     const response = await axios({
  //       method: 'POST',
  //       url: 'https://fathomless-plains-81425.herokuapp.com/home/impact',
  //       data: data,
  //       headers: {
  //         token: localStorage.access_token,
  //         'content-type': 'multipart/form-data'
	// 			},
  //     });
  //     if (response) {
  //       let newData = getState().dataReducer;
	// 			newData.impact = [...newData.impact, newData.impact.push(response.data)];
  //       dispatch({
  //         type: 'SUBMIT_GRAPHIC',
  //         payload: newData
  //       })
  //     }
  //   } catch (error) {
	// 		dispatch({
	// 			type: 'ERROR_TOAST',
	// 			payload: error
	// 		})
  //   }
  // };
};

export const updateSocial = (id, updatedData) => {
	return async (dispatch, getState) => {
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
