import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './configs/PublicPrivateRoute';
import dataAction from './store/actions/dataAction';
import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';
import JoinUs from './views/JoinUs';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import BannerEdit from './views/BannerEdit';
import GraphicAdd from './views/GraphicAdd';
import GraphicEdit from './views/GraphicEdit';
import SocialEdit from './views/SocialEdit';
import TestimonialEdit from './views/TestimonialEdit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		ReactGA.initialize('UA-171059012-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
		dispatch(dataAction());
	}, [dispatch]);

	return (
		<div className="App">
			<BrowserRouter>
			  <Navbar />
				<Switch>
					<Route exact path="/">
			      <Home />
          </Route>
          <Route exact path="/join-us">
			      <JoinUs />
          </Route>
					<PublicRoute exact path="/login" component={Login} />
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
					<PrivateRoute exact path="/banner-edit/:id" component={BannerEdit} />
					<PrivateRoute exact path="/graphic-add" component={GraphicAdd} />
					<PrivateRoute exact path="/graphic-edit/:id" component={GraphicEdit} />
					<PrivateRoute exact path="/social-edit/:id" component={SocialEdit} />
					<PrivateRoute exact path="/testimonial-edit/:id" component={TestimonialEdit} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
