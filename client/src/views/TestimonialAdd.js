import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from '../helpers/swalToast';
import AdminNavbar from '../components/AdminNavbar';
import { testimonialAdd } from '../store/actions/cmsAction';
import './AdminCrud.css';

export default function TestimonialEdit() {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
	const [textLimit, setTextLimit] = useState(450);
	const [data, setData] = useState({
		title: '',
		message: '',
		name: '',
		position: '',
		photo_path: '',
	});
	const [imgPreview, setImgPreview] = useState(null);
	
	const history = useHistory();
	const dispatch = useDispatch();

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
		event.preventDefault();
		if (!data.title || !data.message || !data.name || !data.position || !data.photo_path) {
      toast.fire({
        icon: 'error',
        title: 'Input all forms'
      });
		} else if (data.message.length > textLimit) {
      toast.fire({
        icon: 'error',
        title: 'Character limit exceeded'
      });
    } else {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('message', data.message);
      formData.append('name', data.name);
      formData.append('position', data.position);
      formData.append('photo_path', data.photo_path);
      setIsLoading(true);
      dispatch(testimonialAdd(formData, history, setIsLoading));
    }
  };
  
	const handleCancel = (event) => {
		event.preventDefault();
		history.push('/dashboard');
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
            <small className="text-danger">Count: {data.message.length}/{textLimit} Characters</small>
          </div>
          <div className="form-group">
            <label htmlFor="photo_path">Image</label>
            {/* eslint-disable-next-line */}
            {imgPreview && (
              <img src={imgPreview} alt="Testimonial Pic" className="formImg" />
            )}
            <input
              type="file"
              className="form-control fileInput"
              id="photo_path"
              name="photo_path"
              onChange={handleFormInput}
              accept="image/*"
            />
          </div>
          <button className="btn btn-outline-secondary" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-outline-warning float-right">
            {isLoading ? <div className="spinner-border spinner-border-sm" role="status"></div> : 'Add'}
          </button>
        </form>
			</div>
		</div>
	);
}
