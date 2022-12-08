import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAplicationStatus } from '../../redux/applicationSlice';
import './ApplicationFormMentor.css';

export default function ApplicationFormMentor({ el }) {
  const [hid, setHid] = useState(true);
  const [hidCom, setHidCom] = useState(true);
  const [comm, setComm] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="blog_post">
      <div className="container_copy">
        <div className="studentsCred" key={el.id}>
          Студент:
          <div className="studentsName"><b>{el?.Student.firstName}</b></div>
          <div className="studentsName"><b>{el?.Student?.lastName}</b></div>
        </div>
      </div>
      {el.Statuses[0].status === true || el.Statuses[0].status === false ? (
        el.Statuses[0].status === true ? ('Заявка принята') : ('Заяка отклонена')
      ) : (
        <>
          <button target="_blank" className="btn_primary" onClick={() => setHid((prev) => !prev)} type="button">Подробнее</button>
          <div className="modelStyle" hidden={hid}>
            Текст заявки:
            <br />
            {el?.text}
            Статус заявки:
            <br />
            {el.Statuses[0].status === null ? ('На рассмотрении') : (el.Statuses[0].status === true ? ('Принята') : ('Отклонена'))}
            <br />
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
