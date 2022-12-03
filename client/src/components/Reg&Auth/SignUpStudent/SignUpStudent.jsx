import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../redux/userSlice';

export default function SignUpTwo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputStudent, setInputStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zoom: '',
    phone: '',
    password: '',
    isMentor: false,
  });

  const inputHandler = (e) => {
    setInputStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitInputs = (e) => {
    e.preventDefault();
    dispatch(getUser(inputStudent));
    navigate('/');
  };

  return (
    <div className="main">
      <p>Авторизация студента</p>

      <form
        onSubmit={(e) => submitInputs(e)}
        className="form"
        action=""
        method="post"
      >
        <div>Имя</div>
        <input name="firstName" className="input" type="text" value={inputStudent.firstName} onChange={(e) => inputHandler(e)} />
        <br />
        {' '}
        <br />
        <div>Фамилия</div>
        <input name="lastName" className="input" type="text" value={inputStudent.lastName} onChange={(e) => inputHandler(e)} />
        <br />
        {' '}
        <br />
        <div>Почта</div>
        <input name="email" className="input" type="email" value={inputStudent.email} onChange={(e) => inputHandler(e)} />
        <br />
        {' '}
        <br />
        <div>Zoom</div>
        <input name="zoom" className="input" type="text" value={inputStudent.zoom} onChange={(e) => inputHandler(e)} />
        <br />
        {' '}
        <br />
        <div>Телефон</div>
        <input name="phone" className="input" type="tel" value={inputStudent.phone} onChange={(e) => inputHandler(e)} />
        <br />
        {' '}
        <br />
        <div>Пароль</div>
        <input name="password" id="p1" className="input" type="password" value={inputStudent.password} onChange={(e) => inputHandler(e)} />
        <br />
        {' '}
        <br />
        <div>Повторный ввод пароля</div>
        <input name="repeatPassword" id="p2" className="input" type="password" onChange={(e) => inputHandler(e)} />
        <br />
        {' '}
        <br />
        <button type="submit">
          Отправить
        </button>
      </form>

    </div>

  );
}
