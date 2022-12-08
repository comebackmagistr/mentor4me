import React, { useState } from 'react';

export default function ApplicationFormbutt({ el }) {
  return (
    <div style={{ border: '1px solid black' }} key={el.id}>
      Ментор:
      <div><b>{el?.Mentor.firstName}</b></div>
      <div><b>{el?.Mentor?.lastName}</b></div>
      Текст заявки:
      <div>{el?.text}</div>
      <div>
        Статус заявки:
        {' '}
        {el.Statuses[0]?.status === null ? ('На рассмотрении') : (el.Statuses[0]?.status === true ? (<span style={{ color: 'green' }}>Принята</span>) : (<span style={{ color: 'red' }}>Отклонена</span>))}
        <br />
        {' '}
        Комментарий:
        {' '}
        {el.Statuses[0]?.comments ? (el.Statuses[0]?.comments) : ('Ментор не оставил комментариев')}
      </div>
    </div>
  );
}
