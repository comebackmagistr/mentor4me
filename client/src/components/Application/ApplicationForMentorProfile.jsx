import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosApplication } from '../../redux/applicationSlice';

export default function ApplicationForMentorProfile() {
  const allApplication = useSelector((store) => store.application);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosApplication());
  }, []);
  console.log(allApplication, 'allApplicationqwertyu');
  return (
    <>
      <div>ApplicationForMentorProfile</div>
      {allApplication?.map((el) => <span>{el.text}</span>)}
    </>
  );
}
