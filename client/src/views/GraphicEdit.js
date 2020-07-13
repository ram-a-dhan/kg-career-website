import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from '../helpers/swalToast';
import AdminNavbar from '../components/AdminNavbar';
import './AdminCrud.css';

export default function GraphicEdit() {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		id: null,
		logo_path: '',
		main_image_path: '',
	});

	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();

	const graphicReducer = useSelector((state) => state.dataReducer.impact);
	useEffect(() => {
		if (graphicReducer) {
			setData(graphicReducer.find(
					(one) => one.id === Number(location.pathname.split('/')[2])
			));
		}
	}, [graphicReducer, location]);

	const handleFormInput = (event) => {
		const { name, files } = event.target;
		setData({
			...data,
			[name]: files[0]
		})
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		if (data) {
			const formData = new FormData();
			if (!data.main_image_path) console.log('error');
			formData.append('main_image_path', data.main_image_path);
			formData.append('logo_path', data.logo_path);
			console.log('FORMDATA',formData);
			try {
				setIsLoading(true);
				const response = await axios({
					method: 'PUT',
					url: 'https://fathomless-plains-81425.herokuapp.com/home/impact/' + data.id,
					data: formData,
					headers: {
						token: localStorage.access_token,
						'content-type': 'multipart/form-data'
					},
				});
				if (response) {
					dispatch({
						type: 'UPDATE_GRAPHIC',
						payload: response.data
					})
					history.push('/dashboard');
				}
			} catch (error) {
				dispatch({
					type: 'ERROR_TOAST',
					payload: error
				})
			}
		} else {
			toast.fire({
				icon: 'error',
				title: 'Input at least main image'
			});
		}
		setIsLoading(false);
	};

	const handleReset = (event) => {
		event.preventDefault();
		setData(graphicReducer.find(
				(one) => one.id === Number(location.pathname.split('/')[2])
		));
	};

	return (
		<div className="home">
			<AdminNavbar />
			<h1 className="text-center my-5">Edit Infographic</h1>
			<div className="adminCrud d-flex flex-column flex-nowrap justify-content-start align-items-center">
			{/* {(data.main_image_path && data.logo_path) && ( */}
				<>
					<form onSubmit={handleFormSubmit} style={{ width: '330px' }}>
						<div className="form-group">
							<img src={data.main_image_path} alt="" />
							<label htmlFor="main_image_path">Main Image</label>
							<input
								type="file"
								className="form-control btn btn-outline-primary"
								id="main_image_path"
								name="main_image_path"
								value={data.main_image_path}
								onChange={handleFormInput}
							/>
						</div>
						<button type="reset" className="btn btn-outline-secondary" onClick={handleReset}>
							Reset
						</button>
						<button type="submit" className="btn btn-outline-warning float-right">
							{isLoading ? <div class="spinner-border spinner-border-sm" role="status"></div> : 'Update'}
						</button>
					</form>
				</>
			{/* )}	 */}
			</div>
		</div>
	);
}
