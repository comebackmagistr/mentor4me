import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAplicationStatus } from '../../redux/applicationSlice';

export default function ApplicationFormMentor({ el }) {
  const [hid, setHid] = useState(true);
  const [hidCom, setHidCom] = useState(true);
  const [comm, setComm] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div style={{ border: '1px solid black' }} key={el.id}>
      Студент:
      <div><b>{el?.Student.firstName}</b></div>
      <div><b>{el?.Student?.lastName}</b></div>
      {el.Statuses[0].status === true || el.Statuses[0].status === false ? (
        el.Statuses[0].status === true ? ('Заявка принята') : ('Заяка отклонена')
      ) : (
        <>
          <button onClick={() => setHid((prev) => !prev)} type="button">Подробнее</button>
          <div hidden={hid}>
            Текст заявки:
            {' '}
            {el?.text}
            Статус заявки:
            {' '}
            {el.Statuses[0].status === null ? ('На рассмотрении') : (el.Statuses[0].status === true ? ('Принята') : ('Отклонена'))}
            <br />
            {' '}
            <button
              onClick={() => {
                setHidCom(false);
                setStatus(true);
                setHid(true);
              }}
              type="button"
            >
              Принять

            </button>
            <button
              onClick={() => {
                setHidCom(false);
                setStatus(false);
                setHid(true);
              }}
              type="button"
            >
              Отклонить

            </button>
          </div>
          <div hidden={hidCom}>
            <input name="comments" value={comm} onChange={(e) => setComm(e.target.value)} type="text" placeholder="укажите комментарий" />
            <button
              onClick={() => {
                dispatch(setAplicationStatus({ status, comments: comm, application_id: el.id }));
                navigate('/applications');
              }}
              type="button"
            >
              Отправить

            </button>
          </div>
        </>
      )}

    </div>
  );
}
