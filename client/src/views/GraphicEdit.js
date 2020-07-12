import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateGraphic } from '../store/actions/cmsAction';

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
		dispatch(updateGraphic(data.id, { logo_path: data.logo_path, main_image_path: data.main_image_path }));
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
			<h1 className="text-center my-5">Add Infographic ({data.name})</h1>
			<div className="adminCrud d-flex flex-column flex-nowrap justify-content-start align-items-center">
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
						Update
					</button>
				</form>
			</div>
		</div>
	);
}
