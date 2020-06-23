import React, { useState } from 'react';
import './Infograph.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Infograph = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="infoGraph" onClick={ () => setIsOpen(true) }>
			<div
				className={`infoCircle rounded-circle circle${props.graph.id}`}
				style={{
					...infoCircle,
					...(props.graph.id === 1
						? circle1
						: props.graph.id === 2
						? circle2
						: props.graph.id === 3
						? circle3
						: props.graph.id === 4
						? circle4
						: circle5),
				}}
			></div>
			{/* <div
				className="infoPic rounded-circle"
				style={{ ...infoPic, ...graphPic1 }}
			></div> */}
			<img className="infoPic rounded-circle" src="./banner.jpg" alt="" />
			{isOpen && (
				<Lightbox
					mainSrc={"./banner.jpg"}
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
