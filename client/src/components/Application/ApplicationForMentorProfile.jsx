import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosApplication } from '../../redux/applicationSlice';

export default function ApplicationForMentorProfile() {
  const allApplicationOneMentor = useSelector((store) => store.application);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosApplication());
  }, []);
  return (
    <>
      <div>ApplicationForMentorProfile</div>
      {allApplicationOneMentor?.map((el) => (
        <div key={el.id} style={{ display: 'flex' }}>
          <div><b>{el?.Student.firstName}</b></div>
          <div><b>{el?.Student.lastName}</b></div>
          <div>{el?.text}</div>
        </div>
      ))}
    </>
  );
}
