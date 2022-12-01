import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupMentor } from '../../redux/slices/authMentorSlice';

export default function SignUp() {
  const [auth, setAuth] = useState(true);
  const dispatch = useDispatch();
  const [inputMentor, setInputMentor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zoom: '',
    phone: '',
    video: '',
    call: '',
    chat: '',
    price: '',
    password: '',
    education: '',
    job: '',
    profArea: '',
    profScill: '',
    aboutMe: '',
    portfolio: '',

  });
  const inputHandler = (e) => {
    setInputMentor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitInputs = (e) => {
    e.preventDefault();
    dispatch(signupMentor(Object.fromEntries(new FormData(e.target))));
  };
  return (
    <div className="main">
      <p>Авторизация</p>

      <form
        onSubmit={(e) => submitInputs(e)}
      >
        {auth
          ? (
            <>
              <div>Имя</div>
              <input name="firstName" className="input" type="text" value={inputMentor.firstName} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div>Фамилия</div>
              <input name="lastName" className="input" type="text" value={inputMentor.lastName} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div>Почта</div>
              <input name="email" className="input" type="email" value={inputMentor.email} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div>Zoom</div>
              <input name="zoom" className="input" type="text" value={inputMentor.zoom} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div>Телефон</div>
              <input name="phone" className="input" type="tel" value={inputMentor.phone} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />

              <label htmlFor="htmlvideo">
                <input name="video" id="html" type="checkbox" />
                Видео
              </label>
              <label htmlFor="htmlcall">
                <input name="call" id="htmlcall" type="checkbox" />
                Звонок
              </label>
              <label htmlFor="htmlchat">
                <input name="chat" id="htmlchat" type="checkbox" />
                Чат
              </label>

              <br />
              {' '}
              <br />
              <div>Цена за консультацию</div>
              <input name="price" className="input" type="text" value={inputMentor.price} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div>Пароль</div>
              <input name="password" id="p1" className="input" type="password" value={inputMentor.password} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div>Повторный ввод пароля</div>
              <input name="repeatPassword" id="p2" className="input" type="password" onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <button className="btn" type="submit" onClick={() => setAuth(false)}>Далее</button>
            </>
          ) : (
            <>
              <div>Образование</div>
              <input name="education" className="input" type="text" value={inputMentor.education} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div>Место работы</div>
              <input name="job" className="input" type="text" value={inputMentor.job} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div>Профессиональная область</div>
              <input name="profArea" className="input" type="text" value={inputMentor.profArea} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div>Профессиональные навыки</div>
              <input name="profScill" className="input" type="text" value={inputMentor.profScill} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div>О себе</div>
              <textarea name="aboutMe" className="input" type="text" value={inputMentor.aboutMe} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div>Портфолио</div>
              <input name="portfolio" id="p1" className="input" type="text" placeholder="Введите ссылку" value={inputMentor.portfolio} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <button type="button" onClick={() => setAuth(true)}>Назад</button>
            </>
          )}
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
