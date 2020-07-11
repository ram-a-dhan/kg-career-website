import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/actions/authAction';
// import axios from 'axios';
// import { toast } from '../helpers/swalToast';
import './LoginForm.css';

const LoginForm = () => {
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
		dispatch(login(credentials));
  };

	return (
		<div className="loginSpace">
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
						Log In
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
