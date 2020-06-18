import React from 'react';
import { useHistory } from 'react-router-dom';
import './Container.css';
import './Footer.css';

const Footer = () => {
	const history = useHistory();
	return (
		<div className="footer" style={footer}>
			<div className="container">
				<div className="row w-100 py-5 m-auto justify-content-between">
					{/* eslint-disable-next-line */}
					<a
						href="#"
						onClick={() => history.push('/')}
						className="footlink d-block col-lg-3 px-0 mb-3 text-center text-light"
						style={footLink}
					>
						<img src="./logotype.jpg" alt="logotype" style={logotype} />
					</a>
					{/* eslint-disable-next-line */}
					<a
						href="#"
						onClick={() => history.push('/')}
						className="footlink d-block col-lg-3 px-0 text-center text-light"
						style={footLink}
					>
						Home
					</a>
					{/* eslint-disable-next-line */}
					<a
						href="#"
						onClick={() => history.push('/join-us')}
						className="footlink d-block col-lg-3 px-0 text-center text-light"
						style={footLink}
					>
						Search for Jobs
					</a>
					{/* eslint-disable-next-line */}
					<a
						href="https://www.kompasgramedia.com"
						target="_blank"
						rel="noopener noreferrer"
						className="footlink d-block col-lg-3 px-0 text-center text-light"
						style={footLink}
					>
						Kompasgramedia.com
					</a>
				</div>

				<div className="clear-both border-bottom border-light w-100"></div>

				<div className="">
					<p className="footlink d-block m-0 py-5 text-center text-light" style={footLink}>
						&copy; Copyright of Kompas Gramedia | 2020
					</p>
				</div>
			</div>
		</div>
	);
};

const footer = {
	backgroundColor: '#574193',
};

const footLink = {
	lineHeight: '3rem',
	letterSpacing: '0.1rem',
};

const logotype = {
	height: '3rem',
};

export default Footer;
