import React, { useState } from 'react';
import { clickGA } from '../helpers/clickGA';
import Lightbox from 'react-image-lightbox';
import './Infograph.css';
import 'react-image-lightbox/style.css';

const Infograph = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const clickInfograph = () => {
		clickGA('Media', 'Open infographics');
		setIsOpen(true);
	};
	return (
		<div className="infoGraph" onClick={() => clickInfograph()}>
			<div
				className={`infoCircle rounded-circle circle${props.graph.id}`}
				style={{
					...infoCircle,
					...(props.graph.id % 5 === 1
						? circle1
						: props.graph.id % 5 === 2
						? circle2
						: props.graph.id % 5 === 3
						? circle3
						: props.graph.id % 5 === 4
						? circle4
						: circle5),
				}}
			></div>
			{/* <div
				className="infoPic rounded-circle"
				style={{ ...infoPic, ...graphPic1 }}
			></div> */}
			{
				props.graph.logo_path ?
				<img className="infoPic rounded-circle" src={ props.graph.logo_path } alt="" />
				: <img className="infoPic rounded-circle" src={ props.graph.main_image_path } alt="" />
			}
			{isOpen && (
				<Lightbox
					mainSrc={ props.graph.main_image_path }
					onCloseRequest={ () => setIsOpen(false) }
				/>
				)}
		</div>
	);
};

const infoCircle = {};

// eslint-disable-next-line
const circle1 = {
	backgroundImage: 'url(./circle1.png)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
};

// eslint-disable-next-line
const circle2 = {
	backgroundImage: 'url(./circle2.png)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
};

// eslint-disable-next-line
const circle3 = {
	backgroundImage: 'url(./circle3.png)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
};

// eslint-disable-next-line
const circle4 = {
	backgroundImage: 'url(./circle4.png)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
};

// eslint-disable-next-line
const circle5 = {
	backgroundImage: 'url(./circle5.png)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
};

// eslint-disable-next-line
const infoPic = {};

// eslint-disable-next-line
const graphPic1 = {
	backgroundImage: 'url(./logo512.png)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	// border: '7px solid #FB4742'
};

// eslint-disable-next-line
const graphPic2 = {
	backgroundImage: 'url(./logo512.png)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
};

// eslint-disable-next-line
const graphPic3 = {
	backgroundImage: 'url(./logo512.png)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
};

// eslint-disable-next-line
const graphPic4 = {
	backgroundImage: 'url(./logo512.png)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
};

// eslint-disable-next-line
const graphPic5 = {
	backgroundImage: 'url(./logo512.png)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
};

export default Infograph;
