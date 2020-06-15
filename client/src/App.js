import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Join from './views/Join';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			  <Navbar />
				<Switch>
					<Route exact path="/">
			      <Home />
          </Route>
          <Route exact path="/join-us">
			      <Join />
          </Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
