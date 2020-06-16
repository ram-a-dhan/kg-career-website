import React from "react";
import BannerHome from '../components/BannerHome';
import Footer from '../components/Footer';

const Home = () => {
  return (
		<div className="home">
			<BannerHome />
			<h1 className="text-center">Hello There</h1>
			<Footer />
		</div>
	);
};

export default Home;
