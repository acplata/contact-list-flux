import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bs-success-bg-subtle mb-3">
			<Link to="/">
				<span className="navbar-brand ms-3 h1">Contact List</span>
			</Link>
			<div className="ml-auto">
				<Link to="/form">
					<button className="btn btn-success me-3">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
