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
  // const [visible, setVisible] = useState(false);
  // const clickShowDiv = () => {
  //   setVisible((prev) => !prev);
  // };
  const clickShowDiv = () => {
    dispatch(axiosOneApplication(userId));
  };

  return (
    <>
      <h1>Заявки</h1>
      {allApplicationOneMentor?.map((el) => (
        <>
          <div key={el.id} style={{ display: 'flex' }} onClick={() => clickShowDiv()}>
            <div><b>{el?.Student.firstName}</b></div>
            <div><b>{el?.Student.lastName}</b></div>
            <div>{el?.text}</div>
            <button type="button" onClick={() => clickShowDiv()}>Подробнее</button>
          </div>
          <ApplicationFormbutt el={el} />
        </>
      ))}
    </>
  );
}
