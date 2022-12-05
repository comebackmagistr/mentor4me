import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getApplication } from '../../redux/applicationSlice';

export default function OneCardApplication({ el }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [application, setApplication] = useState({
    video: '',
    call: '',
    chat: '',
    text: '',
  });
  const inputHandler = (e) => {
    setApplication((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitInputs = () => {
    // e.preventDefault();
    dispatch(getApplication(application, id));
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Шаг 2: Выберите формат консультации</label>
        <p>
          <input type="checkbox" name="video" value={application.video} onChange={(e) => setApplication((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} />
          Видео
        </p>
        <p>
          <input type="checkbox" name="call" value={application.call} onChange={(e) => setApplication((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} />
          Звонок
        </p>
        <p>
          <input type="checkbox" name="chat" value={application.chat} onChange={(e) => setApplication((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} />
          Чат
        </p>
      </div>
      <div>
        <label htmlFor="name">Шаг 3: Опишите интересующий Вас вопрос</label>
        <input
          type="text"
          name="text"
          minLength="4"
          maxLength="8"
          size="10"
          value={application.text}
          onChange={(e) => inputHandler(e)}
        />
      </div>
      <button type="button" onClick={() => submitInputs()}>Подать заявку</button>
    </div>
  );
}
