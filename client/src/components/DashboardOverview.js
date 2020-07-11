import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './DashboardOverview.css';

const DashboardOverview = () => {
	const [data, setData] = useState({
		// banner: [],
		// impact: [],
		// testimonial: [],
		// social: [],
	});
	const history = useHistory();
	const dataReducer = useSelector(state => state.dataReducer);
	console.log(dataReducer);
	useEffect(() => {
		if (dataReducer) setData(dataReducer);
	},[dataReducer]);

	return (
		<div
			className="dashboardOverview container d-flex flex-column flex-nowrap justify-content-start align-items-center"
			style={dashboardOverview}
		>
			<h1 className="my-5">Dashboard</h1>
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
						data.banner.map(ban => {
							return (
								<tr>
									<th scope="row">{ban.name}</th>
									<td>{ban.title}</td>
									<td>{ban.subtitle}</td>
									<td><img className="dashImg" src={ban.banner_path} alt="" /></td>
									<td>
										<button
											className="btn btn-warning m-1"
											// onClick={history.push('/banner-edit/' + ban.id)}
										>
											Edit
										</button>
									</td>
								</tr>
							)
						})
					)}
					
				</tbody>
			</table>
			{/* ======================================== */}
			<h3 className="my-5">Infographics</h3>
			<button
				className="btn btn-primary mb-3"
				// onClick={history.push('/infographic-add')}
			>
				Add
			</button>
			<table class="table table-hover">
				<thead>
					<tr>
						<th scope="col">Thumbnail</th>
						<th scope="col">Image</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{data.impact && (
						data.impact.map(graphic => {
							return (
								<tr>
									<th scope="row"><img className="dashImg" src={graphic.logo_path} alt="" /></th>
									<td><img className="dashImg" src={graphic.main_image_path} alt="" /></td>
									<td>
										<button
											className="btn btn-warning m-1"
											// onClick={history.push('/infographic-edit/' + graphic.id)}
										>
											Edit
										</button>
										<button
											className="btn btn-danger"
											// onClick={handleDeleteInfographic(graphic.id)}
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
			<button
				className="btn btn-primary mb-3"
				// onClick={history.push('/testimonial-add')}
			>
				Add
			</button>
			<table class="table table-hover">
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
						data.testimonial.map(testi => {
							return (
								<tr>
									<th scope="row">{testi.title}</th>
									<td>{testi.message}</td>
									<td>{testi.name} / {testi.position}</td>
									<td><img className="dashImg" src={testi.photo_path} alt="" /></td>
									<td>
										<button
											className="btn btn-warning m-1"
											// onClick={history.push('/testimonial-edit' + testi.id)}
										>
											Edit
										</button>
										<button
											className="btn btn-danger"
											// onClick={handleDeleteTestimonial(testi.id)}
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
			<table class="table table-hover">
				<thead>
					<tr>
						<th scope="col">Site</th>
						<th scope="col">Link</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{data.social && (
						data.social.map(site => {
							return (
								<tr>
									<th scope="row">{site.name}</th>
									<td>{site.link}</td>
									<td>
										<button 
											className="btn btn-warning m-1"
											// onClick={history.push('/socialmedia-edit' + site.id)}
										>
											Edit
										</button>
									</td>
								</tr>
							)
						})
					)}
				</tbody>
			</table>
		</div>
	);
};

const dashboardOverview = {
	minHeight: '82vh',
};

export default DashboardOverview;
