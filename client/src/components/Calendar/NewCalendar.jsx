import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

moment.tz.setDefault('Europe/Moscow');

const localizer = momentLocalizer({
  moment,
  format,
  parse,
  startOfWeek,
  getDay,

});

function NewCalendar() {
  return (
    <div className="App">
      <h1>Calendar</h1>
      <div />
      <Calendar localizer={localizer} startAccessor="start" endAccessor="end" style={{ height: 500, margin: '50px' }} />
    </div>
  );
}

export default NewCalendar;
