import React from 'react';
import './OneApplicationMentor.css';

export default function OneApplicationMentor({ review }) {
  console.log('review', review);
  return (
    <div className="blockReview" data-wow-duration="1.2s" data-wow-delay="0.8s">
      <div className="imgBlock">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVn-RVo12JBJq8FDGKViN5KtJL6_OPXIuHA&usqp=CAU" alt="img" className="imgReview" />
      </div>
      <div className="textReview">
        <div className="nameStudent">{`${review?.Student?.firstName} ${review?.Student?.lastName}`}</div>
        <div className="dataReview">
          {`${new Date(review?.createdAt).toLocaleString().slice(0, 10)}`}

        </div>
        <div className="reviewDescr">
          {review?.comment}
        </div>
      </div>
      <div className="retingBlock">
        <div>
          <img className="iconStar" src="/icons/star.png" alt="logo" />
        </div>
        <div className="reting">(4 / 5)</div>
      </div>
    </div>
  );
}
