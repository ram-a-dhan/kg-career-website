import React from 'react';

const BannerJoin = () => {
	return (
		<div
			className="bannerJoin d-flex flex-column justify-content-center align-items-center"
			style={bannerJoin}
		>
			<h1 style={header1}>
				It is not for the doer.
				<br />
				It is for the <span style={{textDecoration:'underline'}}>game-changer</span>.
			</h1>
			<h5 style={header2}>
				Inviting those that wants to be bigger than themselves.
				<br />
				Are you the game-changer we're looking for?
			</h5>
		</div>
	);
};

const bannerJoin = {
	boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.33)',
	backgroundImage: 'url(./banner.jpg)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	height: '91vh',
};

const header1 = {
	color: 'white',
	fontSize: '300%',
	textAlign: 'center',
	fontWeight: '400',
};

const header2 = {
	color: 'white',
	fontSize: '150%',
	textAlign: 'center',
	fontWeight: '300',
	margin: '1rem',
	lineHeight: '6vh',
};

export default BannerJoin;
