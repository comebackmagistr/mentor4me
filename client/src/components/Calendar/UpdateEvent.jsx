import React, { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';

registerLocale('ru', ru);
export default function UpdateEvent({ modalContent }) {
  const [startDate, setStartDate] = useState(new Date(modalContent.start));
  const [startEnd, setstartEnd] = useState(new Date(modalContent.end));

  const handleColorStart = (time) => (time.getHours() > 12 ? 'text-success' : 'text-error');
  const handleColorEnd = (time) => (time.getHours() > 12 ? 'text-success' : 'text-error');
  return (
    <div>
      <form>
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
          <input className="form-control" name="title" id="message-text" defaultValue={modalContent.title} />
        </div>
        <div className="mb-3">
          <label htmlFor="message-text" className="col-form-label">Add information:</label>
          <textarea className="form-control" name="text" id="message-text" defaultValue={modalContent.text} />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
          </button>
          <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" className="btn btn-primary">Save changes</button>
        </div>
      </form>
    </div>
  );
}
