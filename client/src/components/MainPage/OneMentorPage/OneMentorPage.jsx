import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showReviews } from '../../../redux/reviewsSlice';
import OneApplicationMentor from '../../OneApplicationMentor/OneApplicationMentor';
import './OneMentorPage.css';

export default function OneMentorPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allMentors = useSelector((store) => store.userInfo);
  const oneMentor = allMentors.filter((mentor) => Number(mentor.id) === Number(id));

  // ниже код для пагинации reviews
  const reviews = useSelector((store) => store.reviews);
  const [numberReviews, setNumberReviews] = useState(3);
  const currReviews = reviews.slice(0, numberReviews);

  useEffect(() => {
    dispatch(showReviews(id));
  }, []);

  return (
    <>
      <div className="blockItem" data-wow-duration="1.2s" data-wow-delay="0.8s">
        <div className="imgBlock">
          <img src={`/photos/${oneMentor[0]?.photo}`} alt="img" className="imgCard" />
          <p className="reiting">9 / 10</p>
        </div>
        <div className="textCard">
          <div className="subtitleCard">{`${oneMentor[0]?.firstName} ${oneMentor[0]?.lastName}`}</div>
          <div className="jobName">
            {oneMentor[0]?.profArea}
            {' '}
            - тупица
          </div>
          <div className="mentorDescr">
            {oneMentor[0]?.aboutMe}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque pariatur minima quo, vitae minus labore quaerat temporibus odio aperiam aspernatur rerum provident molestias, recusandae ducimus ipsam. Illo, error mollitia.
          </div>
          <div className="scill">
            {oneMentor[0]?.profScill.split(',').map((el) => (
              <div className="scillBlock" key={el}>
                <div className="skillItem">{el}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="priceBlock">
          <button className="button-36" type="button">Подать заявку</button>
          <div className="price">
            Расписание на ближайшее время
          </div>
          <div className="like">
            Посмотреть все расписание
          </div>
        </div>
      </div>

      <hr />
      <div className="blockAllReview">
        <div className="subReview">
          <div className="titleReview">
            Отзывы
          </div>
          <div className="btn">
            <button onClick="" className="button-34" type="submit">Оставить отзыв</button>
          </div>
        </div>

        {currReviews && currReviews.map((el) => <OneApplicationMentor key={el.id} review={el} />)}
        <div className="btn">
          <button onClick={() => setNumberReviews(numberReviews + 3)} className="button-34" type="submit">Еще отзывы</button>
        </div>
      </div>
    </>
  );
}
