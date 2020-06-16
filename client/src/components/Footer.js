import React from 'react';
import { useHistory } from 'react-router-dom';
import './Container.css';

const Footer = () => {
	const history = useHistory();
	return (
		<div className="footer" style={{ backgroundColor: '#574193' }}>
			<div className="container">
				<div className="row w-100 py-5 m-auto justify-content-between">
					{/* eslint-disable-next-line */}
					<a
						href="#"
						onClick={() => history.push('/')}
						className="d-block col-lg-3 px-0 text-center text-light"
						style={footLink}
					>
						<img src="./logotype.jpg" alt="logotype" style={logotype} />
					</a>
					{/* eslint-disable-next-line */}
					<a
						href="#"
						onClick={() => history.push('/')}
						className="d-block col-lg-3 px-0 text-center text-light"
						style={footLink}
					>
						Home
					</a>
					{/* eslint-disable-next-line */}
					<a
						href="#"
						onClick={() => history.push('/join-us')}
						className="d-block col-lg-3 px-0 text-center text-light"
						style={footLink}
					>
						Search for Jobs
					</a>
					{/* eslint-disable-next-line */}
					<a
						href="https://www.kompasgramedia.com/"
						className="d-block col-lg-3 px-0 text-center text-light"
						style={footLink}
					>
						Kompasgramedia.com
					</a>
				</div>

				<div className="clear-both border-bottom border-light w-100"></div>

				<div className="">
					<p className="d-block m-0 py-5 text-center text-light">
						&copy; Copyright of Kompas Gramedia | 2020
					</p>
				</div>
			</div>
		</div>
	);
};

const footLink = {
	lineHeight: '3rem',
	letterSpacing: '0.1rem',
	// fontSize: '3vh',
};

const logotype = {
	height: '3rem',
	width: 'auto',
};

export default Footer;
