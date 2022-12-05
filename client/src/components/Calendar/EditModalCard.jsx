/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../redux/modalSlice';
import { setActiveEdit } from '../../redux/modalSliceEdit';
import AddEvent from './AddEvent';
import UpdateEvent from './UpdateEvent';

export default function EditModalCard() {
  const active = useSelector((s) => s.active);
  const modalContent = useSelector((s) => s.modalContent);
  console.log((modalContent));
  const dispatch = useDispatch();
  return (

    <div className="modal is-active">
      <div className="modal-background" onClick={() => dispatch(setActiveEdit())} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button type="button" className="delete" aria-label="close" />
        </header>
        <section className="modal-card-body">
          <UpdateEvent modalContent={modalContent} />
        </section>
        <footer className="modal-card-foot">
          <button type="button" className="button is-success">Save changes</button>
          <button type="button" className="button" onClick={() => dispatch(setActiveEdit())}>Cancel</button>
          <button type="button" className="button">Delete</button>
        </footer>
      </div>
    </div>

  );
}

// "bulma": "^0.9.4",
