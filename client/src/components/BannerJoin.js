import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './BannerJoin.css';

const BannerJoin = () => {
	const [bannerData, setBannerData] = useState({
		title: '',
		subtitle: '',
		banner_path: ''
	});
	const bannerReducer = useSelector(state => state.dataReducer.banner);
	useEffect(() => {
		if (bannerReducer) setBannerData(bannerReducer.find(data => data.name === 'Join Us'));
	}, [bannerReducer]);
	// Pikirin yang ada text decorationnya ama <br>
	return (
		<div
			className="bannerJoin d-flex flex-column justify-content-center align-items-center"
			style={{...bannerJoin, backgroundImage: `url(${bannerData.banner_path})`}}
		>
			<h1
				className="bannerJoinH1 text-light text-center"
				style={bannerJoinH1}
				dangerouslySetInnerHTML={{__html: bannerData.title}}
			>
				{/* It is not for the doer.
				<br />
				It is for the <span style={{textDecoration:'underline'}}>game-changer</span>. */}
			</h1>
			<h5
				className="bannerJoinH2 text-light text-center"
				style={bannerJoinH2}
				dangerouslySetInnerHTML={{__html: bannerData.subtitle}}
			>
				{/* Inviting those that wants to be bigger than themselves.
				<br />
				Are you the game-changer we're looking for? */}
			</h5>
		</div>
	);
};

const bannerJoin = {
	boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	height: '91vh',
};

const bannerJoinH1 = {
	fontWeight: '400',
	marginTop: '6rem',
};

const bannerJoinH2 = {
	fontWeight: '300',
};

export default BannerJoin;
