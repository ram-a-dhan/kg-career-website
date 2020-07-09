import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from 'react-router-private';
// import { useSelector } from 'react-redux';
import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';
import JoinUs from './views/JoinUs';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	// const isLoggedIn = useSelector(state => state.authReducer);

	useEffect(() => {
		ReactGA.initialize('UA-171059012-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
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
					{/* this one can't properly redirect but consistent */}
					{/* <Route exact path="/login">
						{localStorage.access_token ? <Redirect to="/dashboard" /> : <Login />}
					</Route>
					<Route exact path="/dashboard">
						{!localStorage.access_token ? <Redirect to="/login" /> : <Dashboard />}
					</Route> */}
					{/* this one can properly redirect but inconsistent */}
					<PrivateRoute
						exact path="/login"
						component={Login}
						authStatus={!localStorage.access_token}
						redirectURL="/dashboard"
					/>
					<PrivateRoute
						exact path="/dashboard"
						component={Dashboard}
						authStatus={localStorage.access_token}
						redirectURL="/login"
					/>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
