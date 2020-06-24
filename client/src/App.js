import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';
import JoinUs from './views/JoinUs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	useEffect(() => {
		ReactGa.initialize('UA-170602354-1');
		ReactGa.pageview(window.location.pathname + window.location.search);
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
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
