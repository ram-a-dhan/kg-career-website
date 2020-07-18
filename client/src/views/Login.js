import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/actions/authAction';
import './Login.css';

const Login = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const history = useHistory();
	const isLoggedIn = useSelector(state => state.authReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isLoggedIn) history.push('/dashboard');
	},[isLoggedIn, history]);

	const handleCredentials = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		setCredentials({
			...credentials,
			[name]: value,
		});
	};

  const handleLoginSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);
		dispatch(login(credentials, setIsLoading));
	};
	
  return (
		<div className="home">
			<div className="loginSpace d-flex flex-column flex-nowrap justify-content-center align-items-center">
				<div className="loginForm p-5 rounded-lg shadow">
					<form onSubmit={handleLoginSubmit}>
						<div className="form-group">
							<input
								type="email"
								className="form-control text-center"
								id="email"
								name="email"
								value={credentials.email}
								onChange={handleCredentials}
								placeholder="Email"
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-control text-center"
								id="password"
								name="password"
								value={credentials.password}
								onChange={handleCredentials}
								placeholder="Password"
							/>
						</div>
						<button
							type="submit"
							className="btn btn-block btn-outline-primary"
						>
							{isLoading ? <div className="spinner-border spinner-border-sm" role="status"></div> : 'Log In'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
