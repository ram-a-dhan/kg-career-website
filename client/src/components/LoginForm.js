import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authAction';
import './LoginForm.css';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const history = useHistory();
	const dispatch = useDispatch();

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
		history.push('/dashboard');
  };

	return (
		<div className="loginSpace">
			<div className="loginForm p-5 rounded-lg shadow">
				<form onSubmit={handleLoginSubmit}>
					<div className="form-group">
						<input
							type="text"
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
					<input
						type="submit"
						value="Log In"
						className="btn btn-block btn-outline-primary"
					/>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
