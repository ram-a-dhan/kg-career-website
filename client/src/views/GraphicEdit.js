import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from '../helpers/swalToast';
import AdminNavbar from '../components/AdminNavbar';
import { graphicEdit } from '../store/actions/cmsAction';
import './AdminCrud.css';

export default function GraphicEdit() {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({
		id: null,
		logo_path: '',
		main_image_path: '',
	});
	
	const history = useHistory();
	const params = useParams();
	const dispatch = useDispatch();

	const graphicReducer = useSelector((state) => state.dataReducer.impact);
	useEffect(() => {
		if (graphicReducer) {
			// console.log('GRAPHICREDUCER', graphicReducer);
			setData(graphicReducer.find(
					(one) => one.id === Number(params.id))
			);
		}
	}, [graphicReducer, params]);

	const handleFormInput = (event) => {
		const { name, files } = event.target;
		setData({
			...data,
			[name]: files[0]
		})
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		if (data) {
				const formData = new FormData();
				if (!data.main_image_path) toast.fire({
					icon: 'error',
					title: 'Input at least main image'
				});
				formData.append('main_image_path', data.main_image_path);
				formData.append('logo_path', data.logo_path);
				setIsLoading(true);
				dispatch(graphicEdit(formData, data.id, history));
		} else {
			toast.fire({
				icon: 'error',
				title: 'Input at least main image'
			});
		}
	};

	const handleReset = (event) => {
		event.preventDefault();
		setData(graphicReducer.find(
				(one) => one.id === Number(params.id))
		);
	};
	return (
		<div className="home">
			<AdminNavbar />
			<h1 className="text-center my-5">Edit Infographic</h1>
			<div className="adminCrud d-flex flex-column flex-nowrap justify-content-start align-items-center">
			{data && (
				<>
					<form className="formWidth" onSubmit={handleFormSubmit}>
						<div className="form-group">
							<label htmlFor="main_image_path">Main Image</label>
							<img src={data.main_image_path} alt="" className="formImg" />
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
							<img src={data.logo_path} alt="" className="formImg" />
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
