import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import OneCardMentor from '../MainPage/OneCardMentor';
import { setUserInfo, showAllMentor, showMentor } from '../../redux/userInfoSlice';

export default function Application() {
  const mentors = useSelector((store) => store.userInfo);
  const allMentor = useSelector((store) => store.mentor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showAllMentor());
  }, []);
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/applications/${id}`);
  };

  return (
    <div>
      <div>Шаг 1: Выберите ментора</div>
      <div className="card">
        {mentors.map((el) => (
          <OneCardMentor key={el.id} mentor={el} />
        ))}
      </div>
    </div>
  );
}
