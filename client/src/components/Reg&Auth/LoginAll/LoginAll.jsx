import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLoginUser } from '../../../redux/userSlice';

export default function LoginAll() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(getLoginUser(Object.fromEntries(new FormData(e.target))));
      navigate('/');
    }}
    >
      <input type="email" name="email" placeholder="введите емаил" />
      <input type="password" name="password" />
      <label htmlFor="isMentor">
        Я ментор
        <input name="isMentor" type="checkbox" id="isMentor" />
      </label>
      <button type="submit">Войти</button>
    </form>
  );
}
