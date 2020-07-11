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
import SocialEdit from './views/SocialEdit';
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
					<PrivateRoute exact path="/social-edit/:id" component={SocialEdit} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
