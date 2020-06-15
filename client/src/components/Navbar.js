import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const history = useHistory();
	return (
		<div
			className="navbar navbar-light bg-light sticky-top"
			style={navbar}
		>
			<img src="./logo.png" alt="logo" style={logo} />
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
};

const logo = {
	width: 'auto',
	height: '66%',
	float: 'left',
};

const navDiv = {
	float: 'right',
};

const navLink = {
	color: 'black',
	textDecoration: 'none',
	display: 'block',
	marginLeft: '2rem',
	letterSpacing: '0.1rem',
};

export default Navbar;
