import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'react-router-private';
import ReactGA from 'react-ga';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';
import JoinUs from './views/JoinUs';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	// eslint-disable-next-line
	const [loginStatus, setLoginStatus] = useState(false);

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
					<PrivateRoute
						exact path="/login"
						component={Login}
						authStatus={!loginStatus}
						redirectURL="/dashboard"
					/>
					<PrivateRoute
						exact path="/dashboard"
						component={Dashboard}
						authStatus={loginStatus}
						redirectURL="/login"
					/>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
