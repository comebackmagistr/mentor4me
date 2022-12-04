import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="aboutBlock">
      <div className="leftBlock">
        <h2>О проекте</h2>
        <div className="aboutText">
          <span>
            MEntor4Me — платформа, позволяющая связать профессионалов, которые хотят делиться экспертизой и любознательных людей, желающих прокачать свои практические навыки и способности.
          </span>
          <br />
          <br />
          <span>
            Любой человек может зарегистрироваться на нашей платформе:
            {' '}
            <br />
            <span> - в роли ментора — человека, который готов делиться опытом, видением и советом или</span>
            <br />
            <span> - в роли наставляемого — человека, который ищет новые пути развития, нуждается в профессиональном сопровождении или поддержке.</span>
          </span>
        </div>
        <div className="buttons">
          <button className="buttonFindMent" type="button"><span className="textButton">Найти ментора</span></button>
          <button className="buttonSetMent" type="button"><span className="textButton">Стать ментором</span></button>
        </div>
      </div>
      <div className="rightBlock">
        <img src="/pictures/aboutPhoto.svg" alt="aboutPhoto" />
      </div>
    </div>
  );
}
