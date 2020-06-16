import React from "react";
import BannerHome from '../components/BannerHome';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

const Home = () => {
  return (
		<div className="home">
			<BannerHome />
			<SocialMedia />
			<Footer />
		</div>
	);
};

export default Home;
