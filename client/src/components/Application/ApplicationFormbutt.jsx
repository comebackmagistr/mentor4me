import React, { useState } from 'react';

export default function ApplicationFormbutt({ el, clickShowDiv }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div key={el.id} style={{ display: 'flex' }}>
        <div><b>{el?.Student.firstName}</b></div>
        <div><b>{el?.Student.lastName}</b></div>
        <div>{el?.text}</div>
        <button type="button" onClick={() => setVisible((prev) => !prev)}>Подробнее</button>
      </div>
      <div style={{ visibility: visible ? 'visible' : 'hidden' }}>
        <div>{el?.text}</div>
        <button type="button">Отклонить</button>
        <button type="button">Принять</button>
        {/* <div>
{el?.Student.firstName}
{' '}
{el?.Student.lastName}
</div> */}
        {/* <div>{el?.text}</div>
<button type="button">Отклонить</button>
<button type="button">Принять</button> */}
      </div>
    </>
  );
}
