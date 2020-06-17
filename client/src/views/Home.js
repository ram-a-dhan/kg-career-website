import React from "react";
import BannerHome from '../components/BannerHome';
import AboutUs from '../components/AboutUs';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

const Home = () => {
  return (
		<div className="home">
			<BannerHome />
			<AboutUs />
			<SocialMedia />
			<Footer />
		</div>
	);
};

export default Home;
