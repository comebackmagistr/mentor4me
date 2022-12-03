import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNavbar } from '../../../redux/navbarSlice';
import { getUser } from '../../../redux/userSlice';

export default function SignUp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavbar('signup1'));
  }, []);
  const [auth, setAuth] = useState(true);
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
    isMentor: true,

  });
  const inputHandler = (e) => {
    setInputMentor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitInputs = (e) => {
    e.preventDefault();
    dispatch(getUser(inputMentor));
  };
  return (
    <div className="main">
      <p>Авторизация</p>

      <form
        onSubmit={(e) => {
          submitInputs(e);
        }}
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
                <input name="video" value={inputMentor.video} onChange={(e) => setInputMentor((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} id="html" type="checkbox" />
                Видео
              </label>
              <label htmlFor="htmlcall">
                <input name="call" value={inputMentor.video} onChange={(e) => setInputMentor((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} id="htmlcall" type="checkbox" />
                Звонок
              </label>
              <label htmlFor="htmlchat">
                <input name="chat" value={inputMentor.video} onChange={(e) => setInputMentor((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} id="htmlchat" type="checkbox" />
                Чат
              </label>

              <br />
              {' '}
              <br />
              <div>Цена за консультацию</div>
              <input name="price" className="input" type="number" value={inputMentor.price} onChange={(e) => inputHandler(e)} />
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
              <button type="submit">Отправить</button>
            </>
          )}
      </form>

    </div>

  );
}
