import React /* , { useState } */ from 'react';
// import './OurImpact.css';

const OurImpact = () => {
	/* const [slides, setSlides] = useState([
		{ id:1, title: 'hello there' },
		{ id:2, title: 'general kenobi' },
		{ id:3, title: 'you are a bold one' },
	]); */
	return (
		<div className="ourImpact d-flex flex-row flex-nowrap justify-content-around align-items-center overflow-hidden" style={ourImpact}>
			{/*
				slides.map(slide => {
					return (
						<>
							<div key={slide.id} id={'quote' + slide.id}>{slide.title}</div>
						</>
					)})
			*/}
    </div>
	);
};

const ourImpact = {
	height:'91vh',
};

export default OurImpact;
