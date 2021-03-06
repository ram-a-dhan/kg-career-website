import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { toast } from '../helpers/swalToast';
import AdminNavbar from '../components/AdminNavbar';
import { bannerEdit } from '../store/actions/cmsAction';
import './AdminCrud.css';

export default function BannerEdit() {
	const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
	const [textLimit, setTextLimit] = useState(300);
	const [data, setData] = useState({
		id: null,
		name: '',
		title: '',
		subtitle: '',
		banner_path: '',
	});
	const [imgPreview, setImgPreview] = useState(null);
	
	const history = useHistory();
	const params = useParams();
	const dispatch = useDispatch();

	const bannerReducer = useSelector((state) => state.dataReducer.banner);
	useEffect(() => {
		if (bannerReducer) {
			setData(bannerReducer.find(
					(one) => one.id === Number(params.id))
			);
		}
	}, [bannerReducer, params]);

	const handleFormInput = (event) => {
		const { name, value, files } = event.target;
		if (files) {
			setData({
				...data,
				[name]: files[0],
			});
			setImgPreview(URL.createObjectURL(files[0]));
		} else {
			setData({
				...data,
				[name]: value,
			})
		}	
	};

	const handleFormSubmit = async (event) => {
		try {
			event.preventDefault();
			if (data) {
				const formData = new FormData();
				formData.append('title', data.title);
				if (data.subtitle.length > textLimit) throw new Error('Character limit exceeded')
				formData.append('subtitle', data.subtitle);
				formData.append('banner_path', data.banner_path);
				setIsLoading(true);
				dispatch(bannerEdit(formData, data, history, bannerReducer, setIsLoading));
			}
		} catch (error) {
			dispatch({
				type: 'ERROR_TOAST',
				payload: error
			})
		}
	};

	const handleCancel = (event) => {
		event.preventDefault();
		history.push('/dashboard');
	};
	
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
							<small className="text-danger">Count: {data.subtitle.length}/{textLimit} Characters</small>
						</div>
						<div className="form-group">
							<label htmlFor="banner_path">Main Image</label>
							{/* eslint-disable-next-line */}
							{imgPreview && (
								<img src={imgPreview} alt="Banner Pic" className="formImg" />
								/* eslint-disable-next-line */
							) || (
								<img src={data.banner_path} alt="Banner Pic" className="formImg" />
							)}
							<input
								type="file"
								className="form-control fileInput"
								id="banner_path"
								name="banner_path"
								onChange={handleFormInput}
								accept="image/*"
							/>
						</div>
						<button className="btn btn-outline-secondary" onClick={handleCancel}>
							Cancel
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
