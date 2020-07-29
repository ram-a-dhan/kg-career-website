import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateNavbar } from '../store/actions/cmsAction';

import AdminNavbar from '../components/AdminNavbar';
import './AdminCrud.css';

export default function SocialEdit() {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		id: null,
		title: '',
		link: '',
	});

	const history = useHistory();
	const dispatch = useDispatch();

	const navbarReducer = useSelector((state) => state.dataReducer.navbarLink);
	useEffect(() => {
		if (navbarReducer) setData(navbarReducer);
	}, [navbarReducer]);

	const handleFormInput = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setData({
			...data,
			[name]: value,
		})
		console.log(data);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);
		dispatch(updateNavbar({ title: data.title, link: data.link }, history, setIsLoading));
	};

	const handleCancel = (event) => {
		event.preventDefault();
		history.push('/dashboard');
	};

	return (
		<div className="home">
			<AdminNavbar />
			<h1 className="text-center my-5">Edit Navbar Link</h1>
			<div className="adminCrud d-flex flex-column flex-nowrap justify-content-start align-items-center">
				<form className="formWidth" onSubmit={handleFormSubmit}>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input
							type="text"
							className="form-control"
							id="title"
							name="title"
							value={data.title}
							onChange={handleFormInput}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="link">Link</label>
						<input
							type="text"
							className="form-control"
							id="link"
							name="link"
							value={data.link}
							onChange={handleFormInput}
						/>
					</div>
					<button className="btn btn-outline-secondary" onClick={handleCancel}>
						Cancel
					</button>
					<button type="submit" className="btn btn-outline-warning float-right">
						{isLoading ? <div className="spinner-border spinner-border-sm" role="status"></div> : 'Update'}
					</button>
				</form>
			</div>
		</div>
	);
}
