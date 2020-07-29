import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { clickGA } from '../helpers/clickGA';
import './Container.css';

const Navbar = () => {
	// eslint-disable-next-line
	const [navbarLink, setNavbarLink] = useState({})
	const history = useHistory();
	const navbarReducer = useSelector(state => state.dataReducer.navbarLink);
	useEffect(() => {
		if (navbarReducer) setNavbarLink(navbarReducer);
	}, [navbarReducer]);

	const clickHome = () => {
		clickGA('Link','Go to Homepage');
		history.push('/');
	};

	return (
		<div
			className="navbar navbar-light sticky-top flex-nowrap justify-content-between align-items-center"
			style={navbar}
		>
			{/* eslint-disable-next-line */}
			<a className="navbar-brand" href="#" onClick={() => clickHome()}>
				<img src="./Logo_Kompas_Gramedia_1.png" alt="logo" className="float-left" style={logo} />
			</a>
			<div className="float-right d-flex flex-row flex-nowrap justify-content-end align-items-center" style={navDiv}>
						{/* eslint-disable-next-line */}
						<a href="#" onClick={() => clickHome()} className="d-block ml-4 text-dark" style={navLink}>
							Home
						</a>
						{/* <a
							href="https://www.kalibrr.com/c/kompas-gramedia/jobs/157817/kompas-gramedia-internship-challenge-2020?ref=recruiter_job_card_clipboard_2512880"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => clickGA('Link (External)', 'Go to Internship Challenge')}
							className="d-block ml-4 text-dark"
							style={navLink}>
							Join Internship Challenge
						</a> */}
						{/* eslint-disable-next-line */}
						{navbarLink.title && navbarLink.link && (
							<a
								href={navbarLink.link}
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => clickGA('Link (External)', `Go to ${navbarLink.title}`)}
								className="d-block ml-4 text-dark"
								style={navLink}>
									{navbarLink.title}
							</a>
						)}
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
	// letterSpacing: '0.05rem',
	fontSize: '2vh',
};

export default Navbar;
