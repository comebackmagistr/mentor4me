import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../../redux/userSlice';
import './signup.css';

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hiddenPhone, setHiddenPhone] = useState(true);
  const [hiddenPrice, setHiddenPrice] = useState(true);
  const [auth, setAuth] = useState(true);
  const [inputMentor, setInputMentor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zoom: '',
    phone: '+7',
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
      <p className="pReg">Регистрация ментора</p>

      <form
        onSubmit={(e) => {
          submitInputs(e);
          navigate('/input');
        }}
      >
        {auth
          ? (
            <div className="containerReg">
              <div className="textOnInput">Имя</div>
              <input name="firstName" className="inputAuth" type="text" value={inputMentor.firstName} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div className="textOnInput">Фамилия</div>
              <input name="lastName" className="inputAuth" type="text" value={inputMentor.lastName} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div className="textOnInput">Почта</div>
              <input name="email" className="inputAuth" type="email" value={inputMentor.email} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div className="twoInputs">
                <div className="textOnInput">
                  Zoom
                  <input name="zoom" className="inputAuthTwo" type="text" value={inputMentor.zoom} onChange={(e) => inputHandler(e)} />
                </div>
                <br />
                {' '}
                <br />
                <div className="textOnInput">
                  Телефон
                  <input
                    name="phone"
                    className="inputAuthTwo"
                    type="tel"
                    value={inputMentor.phone}
                    onChange={(e) => {
                      inputHandler(e);
                      if (inputMentor.phone.length > 11) {
                        setHiddenPhone(false);
                      } else {
                        setHiddenPhone(true);
                      }
                    }}
                  />
                  <span hidden={hiddenPhone} className="hiddenText">
                    Номер телефона должен быть в формате
                    (***) *** - ** - **
                  </span>
                </div>
              </div>
              <br />
              {' '}
              <br />

              <label className="inputAuthCheckbox" htmlFor="htmlvideo">
                <span className="textOnInput">Формат консультации</span>
                <br />
                <input name="video" value={inputMentor.video} onChange={(e) => setInputMentor((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} id="html" type="checkbox" />
                Видео
              </label>
              <label className="inputAuthCheckbox" htmlFor="htmlcall">
                <input name="call" value={inputMentor.video} onChange={(e) => setInputMentor((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} id="htmlcall" type="checkbox" />
                Звонок
              </label>
              <label className="inputAuthCheckbox" htmlFor="htmlchat">
                <input name="chat" value={inputMentor.video} onChange={(e) => setInputMentor((prev) => (prev[e.target.name] === 'on' ? ({ ...prev, [e.target.name]: 'off' }) : ({ ...prev, [e.target.name]: 'on' })))} id="htmlchat" type="checkbox" />
                Чат
              </label>

              <br />
              {' '}
              <br />
              <div className="textOnInput">
                Цена за консультацию
                <input
                  name="price"
                  className="inputAuth"
                  type="number"
                  placeholder="Цена указывается за час консультации"
                  value={inputMentor.price}
                  onChange={(e) => {
                    inputHandler(e);
                    if (Number(e.target.value) > 5000) {
                      setHiddenPrice(false);
                    } else {
                      setHiddenPrice(true);
                    }
                  }}
                />
                <span hidden={hiddenPrice} className="hiddenText1">
                  Цена не может быть выше 5000 рублей в час.
                </span>
              </div>
              <br />
              {' '}
              <br />
              <div className="textOnInput">Пароль</div>
              <input name="password" id="p1" className="inputAuth" type="password" value={inputMentor.password} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div className="textOnInput">Повторный ввод пароля</div>
              <input name="repeatPassword" id="p2" className="inputAuth" type="password" onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <button style={{ marginLeft: '220px' }} className="btnNext" type="submit" onClick={() => setAuth(false)}><span className="textInBtn">Далее</span></button>
            </div>
          ) : (
            <>
              <div className="textOnInput">Образование</div>
              <input name="education" className="inputAuth" type="text" value={inputMentor.education} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div className="textOnInput">Место работы</div>
              <input name="job" className="inputAuth" type="text" value={inputMentor.job} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div className="textOnInput">Профессиональная область</div>
              <input name="profArea" className="inputAuth" type="text" value={inputMentor.profArea} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div className="textOnInput">Профессиональные навыки</div>
              <input name="profScill" className="inputAuth" type="text" value={inputMentor.profScill} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div className="textOnInput">О себе</div>
              <textarea name="aboutMe" className="inputAuth" type="text" value={inputMentor.aboutMe} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div className="textOnInput">Портфолио</div>
              <input name="portfolio" id="p1" className="inputAuth" type="text" placeholder="Введите ссылку" value={inputMentor.portfolio} onChange={(e) => inputHandler(e)} />
              <br />
              {' '}
              <br />
              <div className="nextButtons">
                <button className="btnNext" type="button" onClick={() => setAuth(true)}><span className="textInBtn">Назад</span></button>
                <button className="button-34" type="submit">Отправить</button>
              </div>
            </>
          )}
      </form>

    </div>

  );
}
