import React from 'react';
import './GrowWithKG.css';

const GrowSlide = (props) => {
	return (
		// <div className="growWithKG">
		<>
			<div
				className="d-flex flex-row-reverse flex-wrap justify-content-end align-items-center"
				style={growWithKG}
			>
				<div className="growText rounded-lg" style={growText}>
					<h6 className="growH2 mt-2" style={growH2}>
						<del>Working</del> Growing With KG
					</h6>
					<h1 className="growH1 text-left mb-3" style={growH1}>
						{props.testimony.title}
					</h1>
					<span className="d-flex flex-row flex-nowrap">
						<p
							style={{
								fontSize: '5rem',
								lineHeight: '3rem',
								letterSpacing: '0.75rem',
								fontStyle: 'italic',
								color: 'lightgrey',
							}}
						>
							"
						</p>
						<p className="growP1 mb-1 text-left" style={growP1}>
							{props.testimony.quote}
						</p>
					</span>
					<p className="growP2 mb-0" style={growP2}>
						{props.testimony.name + ', ' + props.testimony.position}
					</p>
				</div>
				<img
					src={`./growPic${props.testimony.id}.png`}
					alt=""
					className="growPic"
					style={growPic}
				/>
			</div>
			<div id={`growShape${props.testimony.id}`}></div>
			<div
				className="d-flex flex-row flex-wrap justify-content-start align-items-center"
				style={stripeContainer}
			>
				<div id={`growStripe${props.testimony.id}`}></div>
			</div>
			<div id={`growBg${props.testimony.id}`} style={{...bgContainer, ...(props.testimony.id === 1 ? growBg1 : props.testimony.id === 2 ? growBg2 : growBg3)}}></div>
		</>
		// </div>
	);
};

const growWithKG = {
	height: '91vh',
	// overflow: 'hidden',
};

const growPic = {
	borderRadius: '0rem 50rem 50rem 0rem',
};

const growText = {
	width: '55vh',
	margin: '0rem 2rem 0rem 6rem',
	// backgroundColor: 'rgba(255,255,255,0.8)',
};

const growH1 = {
	color: '#004E9E',
	fontWeight: '400',
};

const growH2 = {
	color: '#666',
	fontWeight: '600',
};

const growP1 = {
	color: '#888',
	letterSpacing: '0.05rem',
};

const growP2 = {
	color: '#666',
	letterSpacing: '0.05rem',
	fontWeight: '700',
	display: 'block',
	marginLeft: '2.9rem',
};

const stripeContainer = {
	height: '91vh',
	position: 'absolute',
	top: '282vh',
	left: '0',
	zIndex: '-2',
};

// eslint-disable-next-line
const growBg1 = {
	backgroundImage: 'url(./growBg1.png)',
	backgroundSize: '100vw',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '20vw 90%',
};

// eslint-disable-next-line
const growBg2 = {
	backgroundImage: 'url(./growBg2.png)',
	backgroundSize: '100vw',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '0vw 90%',
};

// eslint-disable-next-line
const growBg3 = {
	backgroundImage: 'url(./growBg3.png)',
	backgroundSize: '100vw',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '0vw 90%',
};

const bgContainer = {
	width: '100%',
	height: '91vh',
	position: 'absolute',
	top: '282vh',
	zIndex: '-3',
};

export default GrowSlide;
