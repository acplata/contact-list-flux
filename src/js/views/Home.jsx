import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => {

	const { actions, store } = useContext(Context);
	actions.saluda();

	const handleDelete = (index) => {
		actions.deleteContact(index);
	};
	return (
		<div className="text-center container">

			{store.contactList.map((contacto, index) => {
				return (
					<div className="card container" key={`contact-${index}`}>
						<div className="row">
							<div className="col-4 m-auto">
								<img src="https://picsum.photos/200/200" className="img-fluid" />
							</div>
							<div className="col-4 m-auto">
								<h3>{contacto.name}</h3>
								<div className="card-body">{contacto.address}</div>
								<div className="card-body">{contacto.number}</div>
								<div className="card-body">{contacto.email}</div>
							</div>
							<div className="col-4">
								<button className="btn btn-danger-outline" onClick={() => handleDelete(index)} > Delete </button>
								<Link to={`/edit/${index}`}> Edit </Link>
							</div>
						</div>
					</div>



				);
			})}
		</div >
	);
};