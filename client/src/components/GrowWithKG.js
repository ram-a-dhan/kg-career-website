import React, { useState } from 'react';
import GrowSlide from './GrowSlide'
import './GrowWithKG.css';

const GrowWithKG = () => {
  // eslint-disable-next-line
	const [num, setNum] = useState(1);
  // eslint-disable-next-line
	const [testimonials, setTestimonials] = useState([
		{
			id: 1,
			name: 'Cika Theresia',
			position: 'Product Executive Larisin',
			title: ' W̶o̶r̶k̶ Grow Together',
			quote:
				'We have lots of chance to learn and turn my research ideas into reality, and I learn a lot about how to put my academic experience into practice. It is a great place to learn and share together.',
		},
		{
			id: 2,
			name: 'John Doe',
			position: 'HR Specialist Kompas Gramedia',
			title: 'Your Voice Matters',
			quote:
				'Work at Kompas Gramedia values high flexibility, with emphasis on result-driven workstyle, so we have the freedom to define how we should perform, as long as we can deliver the best result.',
		},
		{
			id: 3,
			name: 'Jane Doe',
			position: 'HR Specialist Kompas Gramedia',
			title: 'Bring the Best Out of You',
			quote:
				'I consider Kompas Gramedia as my second home. It feels very comfortable for me beacuse I can learn and play with a lot of new ideas and i have great team members supporting me in every step i took.',
		},
	]);

	const handleNext = () => {
		setNum(num === 3 ? 1 : num + 1);
	}

	return (
		<div className="growWithKG" style={growWithKG}>
			{
        testimonials
          .filter(testimony => testimony.id === num)
          .map(testimony => {
            return <GrowSlide key={testimony.id} testimony={testimony}  />
          })
      }
				<button
					className="nextBg btn rounded-circle d-flex flex-row justify-content-center align-items-center"
					style={{backgroundColor: '#009CDC',}}
					onClick={() => handleNext()}
				>
					<img src="./iconnext.png" alt="" className="nextImg"/>
				</button>
		</div>
	);
};

const growWithKG = {
	height: '91vh',
};

export default GrowWithKG;