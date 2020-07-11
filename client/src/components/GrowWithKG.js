import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import GrowSlide from './GrowSlide';
import { clickGA } from '../helpers/clickGA';
import './GrowWithKG.css';

const GrowWithKG = () => {
  // eslint-disable-next-line
	const [num, setNum] = useState(0);
  // eslint-disable-next-line
	// const [testimonials, setTestimonials] = useState([
	// 	{
	// 		id: 1,
	// 		name: 'Lintang Maraya Syahdenal',
	// 		position: 'Cust. Exp. &  Qualitative Research Officer of StratX',
	// 		title: ' Using data as insight',
	// 		quote:
	// 			'Selama di StratX, saya tidak hanya mengembangkan skill yang terkait pekerjaan utama saya sebagai Researcher namun juga mempelajari ilmu lain yang tentu saja menambah skill saya. Saya belajar pula untuk menggunakan data sebagai sebuah insight dan strategi untuk membantu bisnis. StratX menurut saya adalah tempat yang sangat cocok untuk mereka yang mau maju dan berkembang.',
	// 		picture: 'Lintang Maraya - StratX.png',
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Andika Pramudya',
	// 		position: 'Associate Creative Director of Rekata',
	// 		title: 'Where innovation comes true',
	// 		quote:
	// 			'Bergabung di Rekata, membuat saya tumbuh melebihi level saya yang sebelumnya dan makin kaya secara ilmu, serta pengalaman. Di Rekata, banyak inovasi yang sebelumnya sulit terealisasi kini satu persatu dapat dijalankan bersama anggota yang lain. Khususnya inovasi dalam mengembangkan isi dari buku-buku fisik menjadi konten digital seperti film, game, virtual reality dan lainnya sehingga dapat semakin berguna bagi banyak orang di era digital ini.',
	// 		picture: 'Andika - Rekata.png',
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Cahyo Listyanto',
	// 		position: 'Chief Technology Officer of Larisin',
	// 		title: 'Supportive and collaborative',
	// 		quote:
	// 			'Menjadi salah satu pemimpin di Larisin adalah pekerjaan yang cukup menantang. Banyak banget hal yang masih harus dipelajari. Saya senang karena semua orang di Larisin ikut memberikan dukungan untuk mencoba membuat dunia yang lebih baik dengan melakukan hal-hal yang susah. Di Larisin, kita masih berjuang, tetapi sambil belajar banyak hal baru.',
	// 		picture: 'Cahyo - Larisin.png',
	// 	},
	// ]);
	const [testimonials, setTestimonials] = useState([]);
	const testimonialReducer = useSelector(state => state.dataReducer.testimonial);
	useEffect(() => {
		if (testimonialReducer) setTestimonials(testimonialReducer);
	}, [testimonialReducer]);
	const clickSlideshow = () => {
		clickGA('Media', 'Show next testimonial slide');
		setNum(num === testimonials.length - 1 ? 0 : num + 1);
	}

	return (
		<div className="growWithKG" style={growWithKG}>
			{
				testimonials.length !== 0 && <GrowSlide key={testimonials[num].id} counter={ num } testimony={testimonials[num]} />
      }
				<button
					className="nextBg btn rounded-circle d-flex flex-row justify-content-center align-items-center"
					style={{backgroundColor: '#009CDC',}}
					onClick={() => clickSlideshow()}
				>
					<img src="./iconnext.png" alt="" className="nextImg"/>
				</button>
		</div>
	);
};

const growWithKG = {
	// height: '91vh',
	overflow: 'hidden',
};

export default GrowWithKG;