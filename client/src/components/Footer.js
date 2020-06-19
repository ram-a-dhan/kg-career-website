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
					<div className="col-lg-3 px-0 text-center">
						{/* eslint-disable-next-line */}
						<a
							href="#"
							onClick={() => history.push('/')}
							className="footlinkhome footlink text-light"
							style={footLink}
						>
							<img src="./Logo_Kompas_Gramedia_3.png" alt="logotype" style={logotype} />
						</a>
					</div>
					<div className="col-lg-3 px-0 text-center">
						{/* eslint-disable-next-line */}
						<a
							href="#"
							onClick={() => history.push('/')}
							className="footlink text-light"
							style={footLink}
						>
							Home
						</a>
					</div>
					<div className="col-lg-3 px-0 text-center">
						{/* eslint-disable-next-line */}
						<a
							href="#"
							onClick={() => history.push('/join-us')}
							className="footlink text-light"
							style={footLink}
						>
							Search for Jobs
						</a>
					</div>
					<div className="col-lg-3 px-0 text-center">
						{/* eslint-disable-next-line */}
						<a
							href="https://www.kompasgramedia.com"
							target="_blank"
							rel="noopener noreferrer"
							className="footlink text-light"
							style={footLink}
						>
							Kompasgramedia.com
						</a>
					</div>
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
	letterSpacing: '0.05rem',
};

const logotype = {
	height: '2rem',
};

export default Footer;
