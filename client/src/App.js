import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import JoinUs from './views/JoinUs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
			</BrowserRouter>
		</div>
	);
}

export default App;
