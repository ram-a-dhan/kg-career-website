import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateSocial } from '../store/actions/cmsAction';

import AdminNavbar from '../components/AdminNavbar';
import './AdminCrud.css';

export default function SocialEdit() {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		id: null,
		name: '',
		link: '',
	});

	const history = useHistory();
	const params = useParams();
	const dispatch = useDispatch();

	const socialReducer = useSelector((state) => state.dataReducer.social);
	useEffect(() => {
		if (socialReducer) {
			setData(socialReducer.find(
				(one) => one.id === Number(params.id)
			));
		}
	}, [socialReducer, params]);

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
		setIsLoading(true);
		dispatch(updateSocial(data.id, { link: data.link }, history, setIsLoading));
	};

	const handleCancel = (event) => {
		event.preventDefault();
		history.push('/dashboard');
	};

	return (
		<div className="home">
			<AdminNavbar />
			<h1 className="text-center my-5">Edit Social Media ({data.name})</h1>
			<div className="adminCrud d-flex flex-column flex-nowrap justify-content-start align-items-center">
				<form className="formWidth" onSubmit={handleFormSubmit}>
					<div className="form-group">
						<label htmlFor="link">Website Link</label>
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
