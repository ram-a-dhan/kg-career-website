import React from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/authAction';

export default function AdminNavbar() {
  const history = useHistory();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		history.push('/login');
	};

  return (
    <div className="container d-flex flex-row flex-nowrap justify-content-end align-items-center" style={adminNavbar}>
      {/* eslint-disable-next-line */}
      <a href="#" onClick={() => history.push('/dashboard')} className="d-block ml-4 text-dark" style={navLink}>
        Dashboard
      </a>
      {/* eslint-disable-next-line */}
      <a href="#" onClick={() => handleLogout()} className="d-block ml-4 text-dark" style={navLink}>
        Log Out
      </a>
    </div>
  );
}

const adminNavbar = {
	height: '9vh',
};

const navLink = {
	// letterSpacing: '0.05rem',
	fontSize: '2vh',
};