import React, { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ru } from 'date-fns/locale';
import { axiosSubmitEvent } from '../../redux/eventSlice';

registerLocale('ru', ru);
export default function AddEvent() {
  const [startDate, setStartDate] = useState(new Date());
  const [startEnd, setstartEnd] = useState(new Date());

  const handleColorStart = (time) => (time.getHours() > 12 ? 'text-success' : 'text-error');
  const handleColorEnd = (time) => (time.getHours() > 12 ? 'text-success' : 'text-error');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(axiosSubmitEvent(Object.fromEntries(new FormData(e.target))));
      navigate('/calendar');
    }}
    >
      <DatePicker
        locale="ru"
        showTimeSelect
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeClassName={handleColorStart}
        dateFormat="dd/MM/yyyy HH:mm:ss"
        name="start"
      />
      <DatePicker
        locale="ru"
        showTimeSelect
        selected={startEnd}
        onChange={(date) => setstartEnd(date)}
        timeClassName={handleColorEnd}
        dateFormat="dd/MM/yyyy HH:mm:ss"
        name="end"
      />
      <div className="mb-3">
        <label htmlFor="message-text" className="col-form-label">Title:</label>
        <input className="form-control" name="title" id="message-text" />
      </div>
      <div className="mb-3">
        <label htmlFor="message-text" className="col-form-label">Add information:</label>
        <textarea className="form-control" name="text" id="message-text" />
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
    </form>
  );
}
