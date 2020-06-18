import React from "react";
import BannerHome from '../components/BannerHome';
import AboutUs from '../components/AboutUs';
import OurImpact from '../components/OurImpact';
import GrowWithKG from '../components/GrowWithKG';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

const Home = () => {
  return (
		<div className="home">
			<BannerHome />
			<AboutUs />
			<OurImpact />
			<GrowWithKG />
			<SocialMedia />
			<Footer />
		</div>
	);
};

export default Home;
