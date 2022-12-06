import React, { useState } from 'react';

export default function ApplicationFormbutt({ el, clickShowDiv }) {
  const [visible, setVisible] = useState(false);
  // const clickAddHandler = () => {

  // };

  return (
    <>
      <div key={el.id}>
        <div><b>{el?.Student.firstName}</b></div>
        <div><b>{el?.Student.lastName}</b></div>
        <div>{el?.text}</div>
        <button type="button" onClick={() => setVisible((prev) => !prev)}>Подробнее</button>
      </div>
      <div style={{ visibility: visible ? 'visible' : 'hidden' }}>
        <div>{el?.text}</div>
        <button type="button">Отклонить</button>
        <button type="button">Принять</button>
      </div>
    </>
  );
}
