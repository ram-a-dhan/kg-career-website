import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from '../helpers/swalToast';
import AdminNavbar from '../components/AdminNavbar';
import './AdminCrud.css';

export default function GraphicAdd() {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		logo_path: null,
		main_image_path: null,
	});

	const history = useHistory();
	const dispatch = useDispatch();

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
			if (!data.main_image_path) throw { message: 'Main Image required' }
			formData.append('main_image_path', data.main_image_path);
			formData.append('logo_path', data.logo_path);
			try {
				setIsLoading(true);
				const response = await axios({
					method: 'POST',
					url: 'https://fathomless-plains-81425.herokuapp.com/home/impact',
					data: formData,
					headers: {
						token: localStorage.access_token,
						'content-type': 'multipart/form-data'
					},
				});
				if (response) {
					dispatch({
						type: 'SUBMIT_GRAPHIC',
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
		const formData = new FormData();
		formData.delete('main_image_path');
		formData.delete('logo_path');
		setData({
			main_image_path: null,
			logo_path: null,
		})
	};

	return (
		<div className="home">
			<AdminNavbar />
			<h1 className="text-center my-5">Add Infographic</h1>
			<div className="adminCrud d-flex flex-column flex-nowrap justify-content-start align-items-center">
				<form className="formWidth" onSubmit={handleFormSubmit}>
					<div className="form-group">
						<label htmlFor="main_image_path">Main Image</label>
						<input
							type="file"
							className="form-control fileInput"
							id="main_image_path"
							name="main_image_path"
							onChange={handleFormInput}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="logo_path">Thumbnail</label>
						<input
							type="file"
							className="form-control fileInput"
							id="logo_path"
							name="logo_path"
							onChange={handleFormInput}
						/>
					</div>
					<button type="reset" className="btn btn-outline-secondary" onClick={handleReset}>
						Reset
					</button>
					<button type="submit" className="btn btn-outline-primary float-right" disabled={isLoading}>
						{isLoading ? <div className="spinner-border spinner-border-sm" role="status"></div> : 'Submit'}
					</button>
				</form>
			</div>
		</div>
	);
}
