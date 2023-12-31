import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaPen, FaPeriscope, FaEnvelope, FaPhone } from "react-icons/fa";
import Modal from "../component/Modal.jsx";

export const Home = () => {

	const { actions, store } = useContext(Context);
	actions.saluda();

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
								<div className="card-body"> <FaPeriscope /> {contacto.address}</div>
								<div className="card-body"> <FaPhone /> {contacto.number}</div>
								<div className="card-body"> <FaEnvelope /> {contacto.email}</div>
							</div>
							<div className="buttons col-4">
								<Modal index={index} />
								<Link to={`/edit/${index}`}> <FaPen />  </Link>
							</div>
						</div>
					</div>
				);
			})}
		</div >
	);
};