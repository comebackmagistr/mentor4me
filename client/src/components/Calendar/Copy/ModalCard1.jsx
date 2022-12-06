/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import AddEvent from './AddEvent';
import { setActive } from '../../redux/modalSlice';

export default function ModalCard() {
  const active = useSelector((s) => s.active);
  const dispatch = useDispatch();

  return (

    <div className="modal is-active">
      <div className="modal-background" onClick={() => dispatch(setActive())} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button type="button" className="delete" aria-label="close" />
        </header>
        <section className="modal-card-body">
          <AddEvent />
        </section>
        <footer className="modal-card-foot">
          <button type="button" className="button is-success">Save</button>
          <button type="button" className="button" onClick={() => dispatch(setActive())}>Cancel</button>
        </footer>
      </div>
    </div>

  );
}
