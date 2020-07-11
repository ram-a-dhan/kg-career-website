import React from "react";
import AdminNavbar from '../components/AdminNavbar';
import DashboardOverview from '../components/DashboardOverview'

export default function Dashboard() {
	return (
		<div className="home">
			<AdminNavbar />
			<DashboardOverview />
		</div>
	);
};
