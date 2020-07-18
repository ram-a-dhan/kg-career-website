import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from '../helpers/swalToast';
import AdminNavbar from '../components/AdminNavbar';
import { testimonialEdit } from '../store/actions/cmsAction';
import './AdminCrud.css';

export default function TestimonialEdit() {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		id: null,
		title: '',
		message: '',
		name: '',
		position: '',
		photo_path: '',
	});
	
	const history = useHistory();
	const params = useParams();
	const dispatch = useDispatch();

	const testimonialReducer = useSelector((state) => state.dataReducer.testimonial);
	useEffect(() => {
		if (testimonialReducer) {
			setData(testimonialReducer.find(
					(one) => one.id === Number(params.id))
			);
		}
	}, [testimonialReducer, params]);

	const handleFormInput = (event) => {
		const { name, value, files } = event.target;
		if (files) setData({
			...data,
			[name]: files[0],
		});
		else setData({
			...data,
			[name]: value,
		})	
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		if (!data.title || !data.message || !data.name || !data.position || !data.photo_path) {
			toast.fire({
				icon: 'error',
				title: 'Input all form'
			});
		} else {
			const formData = new FormData();
			formData.append('title', data.title);
			formData.append('message', data.message);
			formData.append('name', data.name);
			formData.append('position', data.position);
			formData.append('photo_path', data.photo_path);
			setIsLoading(true);
			dispatch(testimonialEdit(formData, data, history, testimonialReducer, setIsLoading));
		}
	};

	const handleCancel = (event) => {
		event.preventDefault();
		history.push('/dashboard');
	};

	return (
		<div className="home">
			<AdminNavbar />
			<h1 className="text-center my-5">Edit Testimonial</h1>
			<div className="adminCrud d-flex flex-column flex-nowrap justify-content-start align-items-center">
			{data && (
				<>
					<form className="formWidth" onSubmit={handleFormSubmit}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								className="form-control"
								name="name"
								defaultValue={data.name}
								onChange={handleFormInput}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="position">Position</label>
							<input
								type="text"
								id="position"
								className="form-control"
								name="position"
								defaultValue={data.position}
								onChange={handleFormInput}
							/>
						</div>
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
							<label htmlFor="message">Message</label>
							<textarea
								rows="5"
								id="message"
								className="form-control"
								name="message"
								defaultValue={data.message}
								onChange={handleFormInput}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="photo_path">Image</label>
							<img src={data.photo_path} alt="" className="formImg" />
							<input
								type="file"
								className="form-control fileInput"
								id="photo_path"
								name="photo_path"
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
				</>
			)}
			</div>
		</div>
	);
}
