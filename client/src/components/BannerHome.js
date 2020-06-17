import React from 'react';
import { useHistory } from 'react-router-dom';
import './BannerHome.css';

const BannerHome = () => {
	const history = useHistory();
	return (
		<div
			className="bannerHome d-flex flex-column justify-content-center align-items-center"
			style={bannerHome}
		>
			<h1 className="bannerHomeH1 text-light text-center mt-5" style={bannerHomeH1}>Grow beyond your work</h1>
			<button
				className="btn btn-kg rounded-pill"
				onClick={() => history.push('/join-us')}
				style={buttonjoin}
			>
				Find Your Calling
			</button>
		</div>
	);
};

const bannerHome = {
	boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.33)',
	backgroundImage: 'url(./banner.jpg)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	height: '91vh',
};

const bannerHomeH1 = {
	fontWeight: '400',
};

const buttonjoin = {
	// margin: '1rem',
	// padding: '1rem 2rem',
};

export default BannerHome;
