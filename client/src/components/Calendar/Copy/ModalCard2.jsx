/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import {
  DialogTitle, Dialog, DialogContent, Button, DialogActions,
} from '@mui/material';

import AddEvent from './AddEvent';
import { setActive } from '../../redux/modalSlice';

export default function ModalCard() {
  const active = useSelector((s) => s.active);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(axiosSubmitEvent(e, input));
    setInput('');
  };

  return (
    <Dialog open maxWidth="md">
      <DialogTitle>Добавить событие</DialogTitle>
      <DialogContent>
        <AddEvent />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(setActive())}>Cancel</Button>
        <Button type="submit" onClick={(e) => clickHandler(e)}>Save</Button>
      </DialogActions>
    </Dialog>

  );
}
