import React from 'react';

const SocialMedia = () => {
	return (
		<div className="socialMedia d-flex flex-row flex-wrap justify-content-center align-items-center overflow-auto" style={socialMedia}>
			<div className="m-3 float-left d-flex flex-row justify-content-center align-items-center">
				<div>
					<h1 style={header1}>Stay Connected!</h1>
					<p style={text1}>
						Follow our social media to receive <br />
						career updates and in-depth look <br />
						of working in Kompas Gramedia!
					</p>
					<div
						className="d-flex flex-row flex-nowrap justify-content-between"
						style={{ width: '15rem' }}
					>
						{/* eslint-disable-next-line */}
						<a href="https://web.facebook.com/KompasGramediaKG" target="_blank" rel="noopener noreferrer">
							<div
								className="rounded-circle d-flex flex-row justify-content-center align-items-center"
								style={{...socialIcon,backgroundColor: '#0063B0',}}
							>
								<img src="./iconfacebook.png" alt="" style={{width: '2.5rem', height: 'auto'}} />
							</div>
						</a>
						{/* eslint-disable-next-line */}
						<a href="https://www.linkedin.com/company/kompas-gramedia" target="_blank" rel="noopener noreferrer">
							<div
								className="rounded-circle d-flex flex-row justify-content-center align-items-center"
								style={{...socialIcon,backgroundColor: '#004E9E',}}
							>
								<img src="./iconlinkedin.png" alt="" style={{width: '2rem', height: 'auto'}} />
							</div>
						</a>
						{/* eslint-disable-next-line */}
						<a href="https://www.instagram.com/kompasgramedia" target="_blank" rel="noopener noreferrer">
							<div
								className="rounded-circle d-flex flex-row justify-content-center align-items-center"
								style={{...socialIcon,backgroundColor: '#EF5E4A',}}
							>
								<img src="./iconinstagram.png" alt="" style={{width: '2rem', height: 'auto'}} />
							</div>
						</a>
					</div>
				</div>
			</div>
			<div className="float-right overflow-hidden">
				<img src="./socialmedia.png" alt="" style={socialPic} />
			</div>
		</div>
	);
};

const socialMedia = {
	height:'91vh'
};

const header1 = {
	color: '#004E9E',
	fontSize: '200%',
	marginBottom: '1rem',
};

const text1 = {
  color: '#555',
  letterSpacing: '0.1rem',
  lineHeight: '2rem',
};

const socialIcon = {
	width: '4rem',
	height: '4rem',
	boxShadow: '0.15rem 0.15rem 0.15rem 0.15rem lightgrey',
};

const socialPic = {
	height: '40vw',
	width: 'auto',
};

export default SocialMedia;
