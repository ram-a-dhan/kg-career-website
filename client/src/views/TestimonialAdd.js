import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from '../helpers/swalToast';
import AdminNavbar from '../components/AdminNavbar';
import { testimonialAdd } from '../store/actions/cmsAction';
import './AdminCrud.css';

export default function TestimonialEdit() {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		title: '',
		message: '',
		name: '',
		position: '',
		photo_path: '',
	});
	
	const history = useHistory();
	const dispatch = useDispatch();

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
        title: 'Input all forms'
      });
		} else {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('message', data.message);
      formData.append('name', data.name);
      formData.append('position', data.position);
      formData.append('photo_path', data.photo_path);
      setIsLoading(true);
      dispatch(testimonialAdd(formData, history));
    }
	};
	const handleReset = (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.delete('photo_path');
		setData({
			title: '',
      message: '',
      name: '',
      position: '',
      photo_path: '',
		})
	};
	return (
		<div className="home">
			<AdminNavbar />
			<h1 className="text-center my-5">Add Testimonial</h1>
			<div className="adminCrud d-flex flex-column flex-nowrap justify-content-start align-items-center">
        <form className="formWidth" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              name="name"
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
              onChange={handleFormInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo_path">Image</label>
            <input
              type="file"
              className="form-control fileInput"
              id="photo_path"
              name="photo_path"
              onChange={handleFormInput}
            />
          </div>
          <button type="reset" className="btn btn-outline-secondary" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="btn btn-outline-warning float-right">
            {isLoading ? <div className="spinner-border spinner-border-sm" role="status"></div> : 'Add'}
          </button>
        </form>
			</div>
		</div>
	);
}
