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
		<div className="text-center mt-5 container">
			<h1>Bienvenido a flux</h1>
			<Link to="/form">Agregar Contacto</Link>
			{store.contactList.map((contacto, index) => {
				return (
					<div className="card" key={`contact-${index}`}>
						<div className="card-header">{contacto.name}</div>
						<div className="card-body">{contacto.number}</div>
						<div className="card-body">{contacto.email}</div>
						<div className="card-body">{contacto.address}</div>
						<div className="card-footer">
							<button className="btn btn-danger-outline" onClick={() => handleDelete(index)} >Erase</button>
							<Link to={`/edit/${index}`}>Editar Contacto</Link>
						</div>
					</div>
				);
			})}
		</div >
	);
};