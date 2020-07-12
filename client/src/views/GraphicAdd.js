import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import AdminNavbar from '../components/AdminNavbar';
import './AdminCrud.css';

export default function GraphicAdd() {
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
		const name = event.target.name;
		const value = event.target.value;
		setData({
			...data,
			[name]: value,
		})
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		// dispatch(updateGraphic(data.id, { logo_path: data.logo_path, main_image_path: data.main_image_path }));
		setTimeout(() => {
			history.push('/dashboard');
		}, 2000);
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
