import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React, { useState } from 'react';
import BigCalendar, { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { ru } from 'date-fns/locale/';

const locales = { ru };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function NewCalendar() {
  return (
    <div className="App">
      <h1>Calendar</h1>
      <Calendar localizer={localizer} startAccessor="start" endAccessor="end" style={{ height: 500, margin: '50px' }} />

    </div>
  );
}

export default NewCalendar;
