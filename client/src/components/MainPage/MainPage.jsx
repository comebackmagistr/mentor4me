import React from 'react';
import '../../App.css';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="mentorHeader">
      <div className="container">
        <div className="mentorWrapper">
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
              <button onClick="" className="buttonLeft" type="button">Найти ментора</button>
              <button onClick="" className="buttonRight" type="button">Стать ментором</button>
            </div>
          </div>
          <div className="mentorPhoto">
            <img className="imgMentor" src="/images/mentorHeader.svg" alt="1" />
          </div>
        </div>
      </div>
    </div>
  );
}
