import React from 'react';
import { useHistory } from 'react-router-dom';
import { clickGA } from '../helpers/clickGA';
import './BannerHome.css';

const BannerHome = () => {
	const history = useHistory();

	const clickJobs = () => {
		clickGA('Link','Go to Jobs page');
		history.push('/join-us');
	};

	return (
		<div
			className="bannerHome d-flex flex-column justify-content-center align-items-center"
			style={bannerHome}
		>
			<h1 className="bannerHomeH1 text-light text-center" style={bannerHomeH1}>Grow beyond your work</h1>
			<button
				className="btn btn-kg rounded-pill"
				onClick={() => clickJobs()}
				style={buttonJoin}
			>
				Find Your Calling
			</button>
		</div>
	);
};

const bannerHome = {
	boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)',
	backgroundImage: 'url(./bannerHome.png)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	height: '91vh',
};

const bannerHomeH1 = {
	fontWeight: '400',
	marginTop: '6rem',
};

const buttonJoin = {
};

export default BannerHome;
