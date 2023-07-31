import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { FaTrashAlt } from 'react-icons/fa';

const Modal = ({ index }) => {

  const { actions } = useContext(Context);

  const handleDelete = (index) => {
    actions.deleteContact(index);
  };

  return (

    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <FaTrashAlt />
      </button>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you super sure you want to delete?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(index)} >Yes, delete!</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal