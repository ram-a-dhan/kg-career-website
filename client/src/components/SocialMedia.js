import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
	return (
		<div className="socialMedia d-flex flex-row flex-wrap justify-content-around align-items-center overflow-hidden" style={socialMedia}>
			<div className="socialText m-3 float-left d-flex flex-row justify-content-center align-items-center" style={socialText}>
				<div>
					<h1 className="socialH1" style={socialH1}>Stay Connected!</h1>
					<p className="socialP1" style={socialP1}>
						Follow our social media to receive <br />
						career updates and in-depth look <br />
						of working in Kompas Gramedia!
					</p>
					<div className="socialIconContainer d-flex flex-row flex-nowrap justify-content-between align-items-start">
						{/* eslint-disable-next-line */}
						<a href="https://web.facebook.com/KompasGramediaKG" target="_blank" rel="noopener noreferrer">
							<div
								className="socialIconBg rounded-circle d-flex flex-row justify-content-center align-items-center"
								style={{...socialIconBg,backgroundColor: '#0063B0',}}
							>
								<img src="./iconfacebook.png" alt="" className="socialIconImg" style={socialIconImg} />
							</div>
						</a>
						{/* eslint-disable-next-line */}
						<a href="https://www.linkedin.com/company/kompas-gramedia" target="_blank" rel="noopener noreferrer">
							<div
								className="socialIconBg rounded-circle d-flex flex-row justify-content-center align-items-center"
								style={{...socialIconBg,backgroundColor: '#004E9E',}}
							>
								<img src="./iconlinkedin.png" alt="" className="socialIconImg" style={socialIconImg} />
							</div>
						</a>
						{/* eslint-disable-next-line */}
						<a href="https://www.instagram.com/kompasgramedia" target="_blank" rel="noopener noreferrer">
							<div
								className="socialIconBg rounded-circle d-flex flex-row justify-content-center align-items-center"
								style={{...socialIconBg,backgroundColor: '#EF5E4A',}}
							>
								<img src="./iconinstagram.png" alt="" className="socialIconImg" style={socialIconImg} />
							</div>
						</a>
					</div>
				</div>
			</div>
			<img src="./socialPic.png" alt="" className="socialPic right" style={socialPic} />
		</div>
	);
};

const socialMedia = {
	height:'80vh',
	position: 'relative',
	top: '-15vh',
};

const socialText = {
	backgroundColor: 'rgba(255,255,255,0.8)',
};

const socialH1 = {
	color: '#004E9E',
  fontWeight: '400',
};

const socialP1 = {
  color: '#888',
  letterSpacing: '0.1rem',
};

const socialIconBg = {
	boxShadow: '0.15rem 0.15rem 0.15rem 0.15rem lightgrey',
};

const socialIconImg = {
};

const socialPic = {
	overflowX: 'hidden',
	overflowY: 'visible',
};

export default SocialMedia;
