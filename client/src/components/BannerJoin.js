import React from 'react';
import './BannerJoin.css';

const BannerJoin = () => {
	return (
		<div
			className="bannerJoin d-flex flex-column justify-content-center align-items-center"
			style={bannerJoin}
		>
			<h1 className="bannerJoinH1 text-light text-center mt-5" style={bannerJoinH1}>
				It is not for the doer.
				<br />
				It is for the <span style={{textDecoration:'underline'}}>game-changer</span>.
			</h1>
			<h5 className="bannerJoinH2 text-light text-center" style={bannerJoinH2}>
				Inviting those that wants to be bigger than themselves.
				<br />
				Are you the game-changer we're looking for?
			</h5>
		</div>
	);
};

const bannerJoin = {
	boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.33)',
	backgroundImage: 'url(./bannerJoin.png)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	height: '91vh',
};

const bannerJoinH1 = {
	fontWeight: '400',
};

const bannerJoinH2 = {
	fontWeight: '300',
};

export default BannerJoin;
