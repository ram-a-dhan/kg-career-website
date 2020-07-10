import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from '../helpers/swalToast';
import './LoginForm.css';

const LoginForm = () => {
	const [isLoading , setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const history = useHistory();

	const handleCredentials = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		setCredentials({
			...credentials,
			[name]: value,
		});
	};

  const handleLoginSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		try {
      const response = await axios({
        method: 'POST',
        url: 'https://fathomless-plains-81425.herokuapp.com/user/login',
        // url: 'http://localhost:3000/user/login',
        data: credentials,
			});
			localStorage.setItem('access_token', response.data.access_token);
      toast.fire({
        icon: 'success',
        title: 'Login successful',
      });
			history.push('/dashboard');
    } catch (err) {
      toast.fire({
        icon: 'error',
        title: err.response.data.msg,
      });
		}
		setIsLoading(false);
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
						{isLoading ? <div className="spinner-border spinner-border-sm" role="status"></div> : 'Log In'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
