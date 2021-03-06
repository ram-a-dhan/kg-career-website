import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AdminNavbar from '../components/AdminNavbar';
import swal from 'sweetalert2';
import { testimonialDelete, graphicDelete } from '../store/actions/cmsAction';
import { sanitize } from 'dompurify';
import './Dashboard.css';

export default function Dashboard() {
	const [data, setData] = useState({});
	const history = useHistory();
	const dispatch = useDispatch();
	const dataReducer = useSelector(state => state.dataReducer);
	useEffect(() => {
		if (dataReducer) setData(dataReducer);
	},[dataReducer]);
	
	const handleDeleteTestimonial = (id) => {
		swal.fire({
			title: 'Delete this Testimonial?',
			imageHeight: 200,
			imageAlt: 'Infographic',
			showCancelButton: true,
			confirmButtonColor: '#DC3545',
			cancelButtonColor: '#007BFF',
			confirmButtonText: 'Delete'
		}).then( async (result) => {
			if (result.value) {
				dispatch(testimonialDelete(id, dataReducer.testimonial));
			}
		})
	}
	const handleDeleteGraphic = (graphic) => {
		swal.fire({
			title: 'Delete this Infograph?',
			imageUrl: `${graphic.main_image_path}`,
			imageHeight: 200,
			imageAlt: 'Infographic',
			showCancelButton: true,
			confirmButtonColor: '#DC3545',
			cancelButtonColor: '#007BFF',
			confirmButtonText: 'Delete'
		}).then( async (result) => {
			if (result.value) {
				dispatch(graphicDelete(graphic.id, dataReducer.impact));
			}
		})
	};

	return (
		<div className="home">
			<AdminNavbar />
			<div
				className="dashboard container d-flex flex-column flex-nowrap justify-content-start align-items-center"
			>
				<h1 className="my-5">Dashboard</h1>
				{/* ======================================== */}
				<h3 className="my-5">Navbar Link</h3>
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Link</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.navbarLink && (
							// data.navbarLink.map(site => {
								// return (
									<tr /* key={site.id} */>
										<th scope="row">{data.navbarLink.title}</th>
										<td>{data.navbarLink.link}</td>
										<td>
											{/* eslint-disable-next-line */}
											<a href="#">
												<button 
													className="btn btn-outline-warning m-1"
													onClick={() => history.push('/navbar-edit')}
												>
													Edit
												</button>
											</a>
										</td>
									</tr>
								// )
							// })
						)}
					</tbody>
				</table>
				{/* ======================================== */}
				<h3 className="my-5">Banners</h3>
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Section</th>
							<th scope="col">Title</th>
							<th scope="col">Subtitle</th>
							<th scope="col">Image</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.banner && (
							data.banner.sort((a, b) => { return a.id - b.id }).map(ban => {
								return (
									<tr key={ban.id}>
										<th scope="row">{ban.name}</th>
										<td dangerouslySetInnerHTML={{__html: sanitize(ban.title) }}></td>
										<td dangerouslySetInnerHTML={{__html: sanitize(ban.subtitle) }}></td>
										<td><img className="dashImg" src={ban.banner_path} alt="" /></td>
										<td>
											{/* eslint-disable-next-line */}
											<a href="#">
												<button
													className="btn btn-outline-warning m-1"
													onClick={() => history.push('/banner-edit/' + ban.id)}
												>
													Edit
												</button>
											</a>
										</td>
									</tr>
								)
							})
						)}
						
					</tbody>
				</table>
				{/* ======================================== */}
				<h3 className="my-5">Infographics</h3>
				{/* eslint-disable-next-line */}
				<a href="#">
					<button
						className="btn btn-outline-primary mb-3"
						onClick={() => history.push('/graphic-add')}
					>
						Add
					</button>
				</a>
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Thumbnail</th>
							<th scope="col">Image</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.impact && (
							data.impact.sort((a, b) => { return a.id - b.id }).map((graphic, idx) => {
								return (
									<tr key={idx}>
										<th scope="row"><img className="dashImg" src={graphic.logo_path} alt="" /></th>
										<td><img className="dashImg" src={graphic.main_image_path} alt="" /></td>
										<td>
											{/* eslint-disable-next-line */}
											<a href="#">
												<button
													className="btn btn-outline-warning m-1"
													onClick={() => history.push('/graphic-edit/' + graphic.id)}
												>
													Edit
												</button>
											</a>
												<button
													className="btn btn-outline-danger"
													onClick={() => handleDeleteGraphic(graphic)}
												>
													Delete
												</button>
										</td>
									</tr>
								)
							})
						)}
					</tbody>
				</table>
				{/* ======================================== */}
				<h3 className="my-5">Testimonials</h3>
				{/* eslint-disable-next-line */}
				<a href="#">
					<button
						className="btn btn-outline-primary mb-3"
						onClick={() => history.push('/testimonial-add')}
					>
						Add
					</button>
				</a>
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Quote</th>
							<th scope="col">Name / Position</th>
							<th scope="col">Image</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.testimonial && (
							data.testimonial.sort((a, b) => { return a.id - b.id }).map(testi => {
								return (
									<tr key={testi.id}>
										<th scope="row" dangerouslySetInnerHTML={{__html: sanitize(testi.title) }}></th>
										<td dangerouslySetInnerHTML={{__html: sanitize(testi.message) }}></td>
										<td>{testi.name} / {testi.position}</td>
										<td><img className="dashImg" src={testi.photo_path} alt="" /></td>
										<td>
											{/* eslint-disable-next-line */}
											<a href="#">
												<button
													className="btn btn-outline-warning m-1"
													onClick={() => history.push('/testimonial-edit/' + testi.id)}
												>
													Edit
												</button>
											</a>
												<button
													className="btn btn-outline-danger"
													onClick={ () => handleDeleteTestimonial(testi.id) }
												>
													Delete
												</button>
										</td>
									</tr>
								)
							})
						)}
					</tbody>
				</table>
				{/* ======================================== */}
				<h3 className="my-5">Social Media</h3>
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Site</th>
							<th scope="col">Link</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.social && (
							data.social.sort((a, b) => { return a.id - b.id }).map(site => {
								return (
									<tr key={site.id}>
										<th scope="row">{site.name}</th>
										<td>{site.link}</td>
										<td>
											{/* eslint-disable-next-line */}
											<a href="#">
												<button 
													className="btn btn-outline-warning m-1"
													onClick={() => history.push('/social-edit/' + site.id)}
												>
													Edit
												</button>
											</a>
										</td>
									</tr>
								)
							})
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};
