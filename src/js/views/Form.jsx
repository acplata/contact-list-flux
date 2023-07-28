import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
    name: "",
    number: "",
    email: "",
    address: "",
};

const Form = () => {
    const { actions } = useContext(Context);

    const navigate = useNavigate();
    const param = useParams();

    const [newContact, setNewContact] = useState(initialState);

    const handleChange = (event) => {
        const inputRegister = { ...newContact, [event.target.name]: event.target.value };
        setNewContact(inputRegister);
    };

    const addNewContact = () => {
        actions.addContact(newContact);
    };

    return (
        <div className="container d-flex flex-column gap-2">
            <h1 className="m-auto">Add a new contact</h1>
            <div>
                <label>Full Name</label>
                <input type="text" className="form-control" name="name" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Phone</label>
                <input type="text" className="form-control" name="number" onChange={handleChange} />
            </div>
            <div>
                <label> Email </label>
                <input type="text" className="form-control" name="email" onChange={handleChange} />
            </div>
            <div>
                <label>Address</label>
                <input type="text" className="form-control" name="address" onChange={handleChange} />
            </div>
            <button className="btn btn-primary" onClick={addNewContact}>Agregar Contacto</button>
        </div>

    );
};

export default Form