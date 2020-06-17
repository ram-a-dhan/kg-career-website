import React from 'react';
import { useHistory } from 'react-router-dom';
import './Container.css';

const Navbar = () => {
	const history = useHistory();
	return (
		<div
			className="navbar navbar-light bg-light sticky-top"
			style={navbar}
		>
			{/* eslint-disable-next-line */}
			<a class="navbar-brand" href="#" onClick={() => history.push('/')}>
				<img src="./logo.png" alt="logo" style={logo} />
			</a>
			<div style={navDiv}>
				{/* eslint-disable-next-line */}
				<a href="#" onClick={() => history.push('/')} style={navLink}>
					Home
				</a>
			</div>
		</div>
	);
};

const navbar = {
	height: '9vh',
	boxShadow: '0px 1px 5px 0px rgba(5, 5, 5, 0.33)',
	padding: '0% 7%',
	zIndex: '1000',
};

const logo = {
	width: 'auto',
	height: '6vh',
	float: 'left',
};

const navDiv = {
	float: 'right',
};

const navLink = {
	color: 'black',
	display: 'block',
	marginLeft: '2rem',
	letterSpacing: '0.1rem',
	fontSize: '2vh',
};

export default Navbar;
