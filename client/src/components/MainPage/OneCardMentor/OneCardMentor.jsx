import React from 'react';
import './OneCardMentor.css';
import '../../../App.css';

export default function OneMentorPage({ mentor, loading }) {
  return (
    <div className="blockItem" data-wow-duration="1.2s" data-wow-delay="0.8s">
      <div className="imgBlock">
        <img src={mentor?.photo} alt="img" className="imgCard" />
        <p className="reiting">9 / 10</p>
      </div>
      <div className="textCard">
        <div className="subtitleCard">{`${mentor?.firstName} ${mentor?.lastName}`}</div>
        <div className="jobName">
          {mentor?.profArea}
          {' '}
          - тупица
        </div>
        <div className="mentorDescr">
          {mentor?.aboutMe}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque pariatur minima quo, vitae minus labore quaerat temporibus odio aperiam aspernatur rerum provident molestias, recusandae ducimus ipsam. Illo, error mollitia.
        </div>
        <div className="scill">
          <div className="scillBlock">
            <div className="skillItem">html/css/js</div>
          </div>
          <div className="scillBlock">
            <div className="skillItem">Веб дизайн</div>
          </div>
          <div className="scillBlock">
            <div className="skillItem">Верстка</div>
          </div>
        </div>
      </div>
      <div className="priceBlock">
        <button className="button-36" type="button">Подать заявку</button>
        <div className="price">
          {`${mentor?.price} руб / час`}

        </div>
        <div className="like">
          <img className="iconStyle" src="icons/heart.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}
