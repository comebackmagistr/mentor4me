import React, { useState } from 'react';

export default function ApplicationFormbutt({ el }) {
//   const [visible, setVisible] = useState(false);
//   const clickShowDiv = () => {
//     setVisible((prev) => !prev);
//   };
  return (
    <div>
      {/* <div style={{ visibility: visible ? 'visible' : 'hidden' }}>{el?.text}</div>
      <button style={{ visibility: visible ? 'visible' : 'hidden' }} type="button">Отклонить</button>
      <button style={{ visibility: visible ? 'visible' : 'hidden' }} type="button">Принять</button> */}
      <div>
        {el?.Student.firstName}
        {' '}
        {el?.Student.lastName}
      </div>
      <div>{el?.text}</div>
      <button type="button">Отклонить</button>
      <button type="button">Принять</button>
    </div>
  );
}
