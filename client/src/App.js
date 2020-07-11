import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './configs/PublicPrivateRoute';
// import { useSelector } from 'react-redux';
import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';
import JoinUs from './views/JoinUs';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataAction from './store/actions/dataAction';

function App() {
	// const isLoggedIn = useSelector(state => state.authReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		ReactGA.initialize('UA-171059012-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
		dispatch(dataAction());
		// eslint-disable-next-line
	}, []);

	return (
		<div className="App" /* style={{ overflowX: 'hidden' }} */>
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
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
