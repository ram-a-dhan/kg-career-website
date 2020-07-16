import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { clickGA } from '../helpers/clickGA';
import { useSelector } from 'react-redux';
import './BannerHome.css';

const BannerHome = () => {
	const history = useHistory();
	const [bannerData, setBannerData] = useState({
		title: '',
		subtitle: '',
		banner_path: ''
	});
	const bannerReducer = useSelector(state => state.dataReducer.banner);
	useEffect(() => {
		if (bannerReducer) setBannerData(bannerReducer.find(data => data.name === 'Top Banner'));
	}, [bannerReducer]);
	const clickJobs = () => {
		clickGA('Link','Go to Jobs page');
		history.push('/join-us');
	};
	// Belum nempatin subtitle <<<<
	return (
		<div
			className="bannerHome d-flex flex-column justify-content-center align-items-center"
			style={{...bannerHome, backgroundImage: `url(${bannerData.banner_path})`,}}
		>
			<h1
				className="bannerHomeH1 text-light text-center"
				style={bannerHomeH1}
				dangerouslySetInnerHTML={{__html: bannerData.title}}
			></h1>
			<h5
				className="bannerHomeH2 text-light text-center"
				style={bannerHomeH1}
				dangerouslySetInnerHTML={{__html: bannerData.subtitle}}
			></h5>
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
	// backgroundImage: 'url(./bannerHome.png)',
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
