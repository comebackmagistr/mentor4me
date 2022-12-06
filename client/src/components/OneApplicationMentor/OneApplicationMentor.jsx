import React from 'react';
import './OneApplicationMentor.css';

export default function OneApplicationMentor({ application }) {
  console.log('application', application.Student);
  return (
    <div className="blockItem" data-wow-duration="1.2s" data-wow-delay="0.8s">
      <div className="imgBlock">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVn-RVo12JBJq8FDGKViN5KtJL6_OPXIuHA&usqp=CAU" alt="img" className="imgCard" />
      </div>
      <div className="textCard">
        <div className="subtitleCard">Beb Bobov</div>
        <div className="jobName">
          {`${new Date(application?.createdAt).toLocaleString().slice(0, 10)}`}

        </div>
        <div className="mentorDescr">
          {application?.text}
        </div>
      </div>
      <div className="priceBlock">
        <div className="price">
          9 / 10
        </div>
        <div className="like">
          <img className="iconStyle" src="icons/heart.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}
