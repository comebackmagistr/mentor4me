import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosApplication, axiosOneApplication } from '../../redux/applicationSlice';
import ApplicationFormbutt from './ApplicationFormbutt';

export default function ApplicationForMentorProfile({ userId, oneApplication }) {
  const allApplicationOneMentor = useSelector((store) => store.application);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosApplication());
  }, []);

  return (
    <>
      <h1>Заявки</h1>
      <div>
        <div>Все заявки</div>
      </div>
      {allApplicationOneMentor?.map((el) => (
        <ApplicationFormbutt el={el} />
      ))}
      <div>Завершенные</div>
    </>
  );
}
