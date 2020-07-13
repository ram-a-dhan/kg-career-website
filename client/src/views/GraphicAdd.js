import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { graphicAdd } from '../store/actions/cmsAction';
import axios from 'axios';
import { toast } from '../helpers/swalToast';
import AdminNavbar from '../components/AdminNavbar';
import './AdminCrud.css';

export default function GraphicAdd() {
	const [data, setData] = useState({
		logo_path: null,
		main_image_path: null,
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
		if (data.main_image_path) {
			const formData = new FormData();
			if (!data.main_image_path) console.log('error');
			formData.append('main_image_path', data.main_image_path);
			formData.append('logo_path', data.logo_path);
			console.log('FORMDATA',formData);
			try {
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
					dispatch(graphicAdd(response.data));
					history.push('/dashboard');
				}
			} catch (error) {
				console.log(error);
			}
			history.push('/dashboard');
		} else {
			toast.fire({
				icon: 'error',
				title: 'Input atleast main image'
			});
		}
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
					<button type="submit" className="btn btn-outline-primary float-right">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
