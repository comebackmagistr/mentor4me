import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { setUserInfo, showAllMentor } from '../../redux/userInfoSlice';

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
          <>
            <div>
              <div className="container">
                <h4>
                  <b>
                    {el?.firstName}
                    {' '}
                    {el?.lastName}
                  </b>
                </h4>
                <span>{el?.profArea}</span>
                <span>{el?.education}</span>
                <span>{el?.profScill}</span>
                <span>{el?.price}</span>
              </div>
            </div>
            <button type="button" onClick={() => clickHandler(el.id)}>Выбрать</button>
          </>
        ))}
      </div>
    </div>
  );
}
