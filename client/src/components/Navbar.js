import React from 'react';
import { useHistory } from 'react-router-dom';
import './Container.css';

const Navbar = () => {
	const history = useHistory();
	return (
		<div
			className="navbar navbar-light sticky-top"
			style={navbar}
		>
			{/* eslint-disable-next-line */}
			<a class="navbar-brand" href="#" onClick={() => history.push('/')}>
				<img src="./Logo_Kompas_Gramedia_1.png" alt="logo" className="float-left" style={logo} />
			</a>
			<div className="float-right" style={navDiv}>
				{/* eslint-disable-next-line */}
				<a href="#" onClick={() => history.push('/')} className="d-block ml-2" style={navLink}>
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
	backgroundColor: 'white',
};

const logo = {
	width: 'auto',
	height: '6vh',
};

const navDiv = {
};

const navLink = {
	color: 'black',
	letterSpacing: '0.1rem',
	fontSize: '2vh',
};

export default Navbar;
