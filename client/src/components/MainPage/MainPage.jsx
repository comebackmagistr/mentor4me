import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { showAllMentor } from '../../redux/userInfoSlice';
import './MainPage.css';
import MentorPage from './MentorPage';
import OneCardMentor from './OneCardMentor';

export default function MainPage() {
  const mentors = useSelector((state) => state.userInfo);
  const [allMentors, setAllMentors] = useState(mentors);
  const [numberMentors, setNumberMentors] = useState(3);
  const [currPage, setCurrPage] = useState(1);// текущая страница
  const [mentorPerPage] = useState(5);// кол-во отображаемых на 1 стр менторов

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showAllMentor());
  }, []);

  const scrollHandler = (e) => {
    console.log('scroll');
  };

  const lastMentorIndex = currPage * mentorPerPage;// это число нужно менять
  const firstMentorIndex = lastMentorIndex - mentorPerPage;

  const currMentor = mentors.slice(0, numberMentors);
  return (
    <section className="mainPage">

      <div className="headerWrapper">
        <div className="mentorLeft">
          <div className="titleOne">
            Платформа для поиска
            <br />
            персонального ментора
          </div>
          <div className="contentText">
            Найди ментора для индивидуальных консультаций в соответствии со своими целями и интересами.
          </div>
          <div className="contentButton">
            <button onClick="" className="buttonLeft" type="button"><span className="textButton">Найти ментора</span></button>
            <button onClick="" className="buttonRight" type="button"><span className="textButton">Стать ментором</span></button>
          </div>
        </div>
        <div className="mentorPhoto">
          <img className="imgMentor" src="/images/mentorHeader.svg" alt="1" />
        </div>
      </div>

      <div className="middleWrapper">
        <div className="titleOne_center">
          Как это работает?
        </div>

        <div className="numberContainer">
          <div className="numberBlock">
            <div className="number">1</div>
            <div className="titleNumber">
              Выберите ментора
            </div>
            <div className="numberText">
              по интерисующему Вас направлению
            </div>
          </div>

          <div className="numberBlock">
            <div className="number">2</div>
            <div className="titleNumber">
              Напишите ментору
            </div>
            <div className="numberText">
              в чём Вам нужна его
              <br />
              помощь или консультация
            </div>
          </div>

          <div className="numberBlock">
            <div className="number">3</div>
            <div className="titleNumber">
              Договоритесь о целях
            </div>
            <div className="numberText">
              и формате сотрудничества на первой встрече с ментором
            </div>
          </div>

          <div className="numberBlock">
            <div className="number">4</div>
            <div className="titleNumber">
              Составьте план
            </div>
            <div className="numberText">
              и достигайте поставленных целей
            </div>
          </div>
        </div>
        <div className="btnNumber">
          <button onClick="" className="buttonStart" type="submit"><span className="textButton">Начать</span></button>
        </div>

      </div>

      {/* <MentorPage /> */}
      <div className="mentorBlock">
        <h2 className="title">Наши менторы</h2>
        {currMentor && currMentor?.map((el) => <OneCardMentor key={el.id} mentor={el} />)}
        <div className="btn">
          <button onClick={() => setNumberMentors(numberMentors + 3)} className="button-34" type="submit">Подгрузить</button>
        </div>
      </div>
    </section>
  );
}
