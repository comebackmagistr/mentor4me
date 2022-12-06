import React from 'react';
import './OneCardMentor.css';
import '../../../App.css';
import { useNavigate, Link } from 'react-router-dom';

export default function OneMentorPage({ mentor, loading }) {
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/applications/${id}`);
  };
  const clickHandlerforinfo = (id) => {
    navigate(`/mentorinfo/${id}`);
  };
  return (
    <div className="blockItem" data-wow-duration="1.2s" data-wow-delay="0.8s">
      <div className="imgBlock">
        <img src={`/photos/${mentor?.photo}`} alt="img" className="imgCard" />
        <p className="reiting">9 / 10</p>
      </div>
      <div className="textCard" onClick={() => clickHandlerforinfo(mentor.id)}>
        <div className="subtitleCard">{`${mentor?.firstName} ${mentor?.lastName}`}</div>
        <div className="jobName">
          {mentor?.profArea}
          {' '}
          - тупица
        </div>
        <div className="mentorDescr">
          {mentor?.aboutMe}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquid, ad illum laudantium eius laboriosam dolores ea repellat eos repudiandae harum, quibusdam accusantium animi asperiores voluptas deleniti necessitatibus adipisci dignissimos!
        </div>
        <div className="scill">
          {Array.isArray(mentor?.profScill) && mentor?.profScill.split(',').map((el) => (
            <div className="scillBlock" key={el}>
              <div className="skillItem">{el}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="priceBlock">
        <button className="button-36" onClick={() => clickHandler(mentor.id)} type="button">Подать заявку</button>
        <div className="price">
          {`${mentor?.price} руб / час`}
        </div>
        <div className="like">
          👍
          <img className="iconStyle" src="icons/heart.png" alt="logo" />
        </div>
      </div>
    </div>

  );
}
