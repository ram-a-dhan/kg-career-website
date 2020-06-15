import React from 'react';
import { useHistory } from 'react-router-dom';
import './BannerHome.css';

const BannerHome = () => {
	const history = useHistory();
	return (
		<div className="bannerHome" style={bannerHome}>
			<h1 style={header1}>Grow beyond your work</h1>
			<button
				className="btn btn-lg btn-primary rounded-pill"
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
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
};

const header1 = {
	color: 'white',
	fontSize: '8vh',
	textAlign: 'center',
	fontWeight: '400',
};

const buttonjoin = {
	margin: '1rem',
	padding: '1rem 2rem',
};

export default BannerHome;
