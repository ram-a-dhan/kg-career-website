import React from "react";
import AdminNavbar from '../components/AdminNavbar';
import './AdminCrud.css';

export default function SocialEdit() {
	return (
		<div className="home">
			<AdminNavbar />
			<h1 className="text-center my-5">Social Media Edit</h1>
			<div className="adminCrud d-flex flex-column flex-nowrap justify-content-start align-items-center">
				<form>
					<div class="form-group">
						<label for="link">Website Link</label>
						<input type="email" class="form-control" id="link" name="link" />
					</div>
					<button type="submit" class="btn btn-outline-warning">Edit</button>
				</form>
			</div>
		</div>
	);
};
