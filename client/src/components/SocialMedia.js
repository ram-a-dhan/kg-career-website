import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { clickGA } from '../helpers/clickGA';
import './SocialMedia.css';

const SocialMedia = () => {
	const [socialMediaData, setSocialMediaData] = useState({});
	const socialMediaReducer = useSelector(state => state.dataReducer.social);
	useEffect(() => {
		if (socialMediaReducer) setSocialMediaData({
			facebook: socialMediaReducer.find(data => data.name === 'Facebook').link,
			linkedin: socialMediaReducer.find(data => data.name === 'Linkedin').link,
			instagram: socialMediaReducer.find(data => data.name === 'Instagram').link,
		});
	}, [socialMediaReducer]);
	return (
		<div className="socialMedia" style={socialMedia}>
			{/* <div data-aos="fade-right"> */}
				<div data-aos="fade-right" className="socialText m-3 d-flex flex-row flex-wrap justify-content-center align-items-center" style={socialText}>
					<div>
						<h1 className="socialH1 text-left" style={socialH1}>Stay Connected!</h1>
						<p className="socialP1 text-left" style={socialP1}>
							Follow our social media to receive <br />
							career updates and in-depth look <br />
							of working in Kompas Gramedia!
						</p>
						<div className="socialIconContainer d-flex flex-row flex-nowrap justify-content-between align-items-start">
							{/* eslint-disable-next-line */}
							<a
								href={ socialMediaData.facebook }
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => clickGA('Link (External)', 'Go to KG Facebook page')}
							>
								<div
									className="socialIconBg rounded-circle d-flex flex-row justify-content-center align-items-center"
									style={{...socialIconBg,backgroundColor: '#0063B0',}}
								>
									<img src="./iconfacebook.png" alt="" className="socialIconImg" style={socialIconImg} />
								</div>
							</a>
							{/* eslint-disable-next-line */}
							<a
								href={ socialMediaData.linkedin }
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => clickGA('Link (External)', 'Go to KG Linkedin page')}
							>
								<div
									className="socialIconBg rounded-circle d-flex flex-row justify-content-center align-items-center"
									style={{...socialIconBg,backgroundColor: '#004E9E',}}
								>
									<img src="./iconlinkedin.png" alt="" className="socialIconImg" style={socialIconImg} />
								</div>
							</a>
							{/* eslint-disable-next-line */}
							<a
								href={ socialMediaData.instagram }
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => clickGA('Link (External)', 'Go to KG Instagram page')}
							>
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
			{/* </div> */}
			{/* <div data-aos="fade-left"> */}
				<img data-aos="fade-left" src="./socialPic.png" alt="" className="socialPic" style={socialPic} />
			{/* </div> */}
		</div>
	);
};

const socialMedia = {
	height:'91vh',
	// position: 'relative',
	// top: '-15vh',
	overflow: 'hidden',

};

const socialText = {
	// backgroundColor: 'rgba(255,255,255,0.8)',
};

const socialH1 = {
	color: '#004E9E',
  fontWeight: '400',
};

const socialP1 = {
  color: '#888',
  letterSpacing: '0.05rem',
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
