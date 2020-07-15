import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from '../helpers/swalToast';
import AdminNavbar from '../components/AdminNavbar';
import './AdminCrud.css';

export default function BannerEdit() {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		id: null,
		name: '',
		title: '',
		subtitle: '',
		banner_path: '',
	});
	
	const history = useHistory();
	const params = useParams();
	const dispatch = useDispatch();

	const bannerReducer = useSelector((state) => state.dataReducer.banner);
	useEffect(() => {
		if (bannerReducer) {
			// console.log('BANNERREDUCER', bannerReducer);
			setData(bannerReducer.find(
					(one) => one.id === Number(params.id))
			);
		}
	}, [bannerReducer, params]);

	const handleFormInput = (event) => {
		console.log(event.target.name);
		const { name, value } = event.target;
		setData({
			...data,
			[name]: value,
		})	
	};

	const handleFormSubmit = async (event) => {
		try {
			event.preventDefault();
			if (data) {
					const formData = new FormData();
					// eslint-disable-next-line
					if (!data.banner_path) throw { message: 'Banner Image required' }
					formData.append('title', data.title);
					formData.append('subtitle', data.subtitle);
					formData.append('banner_path', data.banner_path);
					let apiURL = '';
					if (data.name === 'Top Banner') apiURL = 'https://fathomless-plains-81425.herokuapp.com/home/topbanner';
					else if (data.name === 'Who We Are') apiURL = 'https://fathomless-plains-81425.herokuapp.com/home/whoweare';
					else if (data.name === 'Join Us') apiURL = 'https://fathomless-plains-81425.herokuapp.com/joinus';
					setIsLoading(true);
					const response = await axios({
						method: 'PUT',
						url: apiURL,
						data: formData,
						headers: {
							token: localStorage.access_token,
							'content-type': 'multipart/form-data'
						},
					});
					dispatch({
						type: 'UPDATE_BANNER',
						payload: {
							id: data.id,
							data: {
								title: data.title,
								subtitle: data.subtitle,
								banner_path: response.data.url,
							}
						}
					})
					history.push('/dashboard');
			} else {
				toast.fire({
					icon: 'error',
					title: 'Input at least main image'
				});
			}
			setIsLoading(false);
		} catch (error) {
			dispatch({
				type: 'ERROR_TOAST',
				payload: error
			})
		}
	};

	const handleReset = (event) => {
		event.preventDefault();
		setData(bannerReducer.find(
				(one) => one.id === Number(params.id))
		);
	};
	console.log(data);
	return (
		<div className="home">
			<AdminNavbar />
			<h1 className="text-center my-5">Edit Banner ({data.name})</h1>
			<div className="adminCrud d-flex flex-column flex-nowrap justify-content-start align-items-center">
			{data && (
				<>
					<form className="formWidth" onSubmit={handleFormSubmit}>
						<div className="form-group">
							<label htmlFor="title">Title</label>
							<input
								type="text"
								id="title"
								className="form-control"
								name="title"
								defaultValue={data.title}
								onChange={handleFormInput}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="subtitle">Subtitle</label>
							<textarea
								rows="5"
								id="subtitle"
								className="form-control"
								name="subtitle"
								defaultValue={data.subtitle}
								onChange={handleFormInput}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="banner_path">Main Image</label>
							<img src={data.banner_path} alt="" className="formImg" />
							<input
								type="file"
								className="form-control fileInput"
								id="banner_path"
								name="banner_path"
								// value={data.banner_path}
								onChange={handleFormInput}
							/>
						</div>
						<button type="reset" className="btn btn-outline-secondary" onClick={handleReset}>
							Reset
						</button>
						<button type="submit" className="btn btn-outline-warning float-right">
							{isLoading ? <div className="spinner-border spinner-border-sm" role="status"></div> : 'Update'}
						</button>
					</form>
				</>
			)}
			</div>
		</div>
	);
}
