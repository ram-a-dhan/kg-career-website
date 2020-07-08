import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="loginSpace">
      <div className="loginForm p-5 rounded-lg shadow">
        <form>
          <div className="form-group">
            <input type="text" className="form-control text-center" id="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control text-center" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-block btn-outline-primary">Log In</button>
        </form>
      </div>
    </div>
  )
};

export default LoginForm;