import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { Calendar, momentLocalizer, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { axiosEvent } from '../../redux/eventSlice';

import 'moment/locale/ru';
import AddEvent from './AddEvent';
import { setActive } from '../../redux/modalSlice';
import ModalCard from './ModalCard';

moment.locale('ru');

const localizer = momentLocalizer(moment);

function NewCalendar() {
  const [open, setOpen] = useState(false);
  const active = useSelector((s) => s.active);

  // Отображение задачи в календаре
  const task = useSelector((store) => store.events);
  const dispatch = useDispatch();
  const event = task.map(
    (el) => (
      {
        end: new Date(el?.end),
        start: new Date(el?.start),
        title: el?.title,
      }
    ),
  );
  console.log(event);

  useEffect(() => {
    dispatch(axiosEvent());
  }, []);

  // Появление модального окна при клике на дату
  // const openEventClick = () => {
  //   setOpen(true);
  // };
  const clickRef = useRef(null);

  // const [active, setActive] = useState(false);
  // const dispatch = useDispatch()

  useEffect(
    () => () => {
      window.clearTimeout(clickRef?.current);
    },
    [],
  );

  const onSelectSlot = useCallback((slotInfo) => {
    console.log('selectfunc');
    window.clearTimeout(clickRef?.current);
    clickRef.current = window.setTimeout(() => {
      dispatch(setActive());
    }, 250);
  }, []);
  // Появление модального окна при клике на ивент для редактирования9
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
        popup // показывает вкладочку "еще"
        events={event}
        // onSelectEvent={openEventClick}
        onSelectSlot={onSelectSlot}

        // onSelectEvent={} // изменение ивента при клике на задачу
        // onSelectSlot={() => {}}// добавление новой задачи при клике на дату

      />
      {active
      && <ModalCard />}
    </div>
  );
}

export default NewCalendar;
