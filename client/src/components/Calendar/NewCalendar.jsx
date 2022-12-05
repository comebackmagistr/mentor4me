import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, momentLocalizer, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
// import { ru } from 'date-fns/locale'; // 1 вариант
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { axiosEvent } from '../../redux/eventSlice';

import 'moment/locale/ru';

moment.locale('ru');

// const locales = {
//   ru,
// };
const localizer = momentLocalizer(moment);

// 1 вариант
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// Добавление задач   const todoes = useSelector((s) => s.todo);

function NewCalendar() {
  const [open, setOpen] = useState(false);

  // Отображение задачи в календаре
  const task = useSelector((store) => store.events);
  const dispatch = useDispatch();
  const event = task?.map(
    (el) => (
      {
        end: el?.end,
        start: el?.start,
        title: el?.title,
      }
    ),
  );
  console.log(event);

  useEffect(() => {
    dispatch(axiosEvent());
  }, []);

  const openEventClick = () => {
    setOpen(true);
    if (task.id) {
      axiosEvent(task.id);
    }
  };

  const { messages } = useMemo(
    () => ({
      messages: {
        week: 'Неделя',
        work_week: 'Рабочая неделя',
        day: 'День',
        month: 'Месяц',
        previous: 'Предыдущий',
        next: 'Следующий',
        today: 'Сегодня',
        agenda: 'Встречи',
        showMore: (total) => `+${total} еще`,
      },
    }),
    [],
  );

  return (
    <div className="App">
      <h1>Calendar</h1>
      <Calendar
        // culture="ru" // 1 вариант
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        style={{ height: 500, margin: '50px' }}
        selectable
        // onSelectEvent={onSelectEvent} // изменение ивента при клике на задачу
        onSelectEvent={openEventClick}
        // onSelectSlot={() => {
        // }}// добавление новой задачи при клике на дату
          //  events.map((noteevent) => <EventForm noteevent={noteevent} key={noteevent.id} />)
        popup
        events={event}
      />
    </div>
  );
}

export default NewCalendar;
