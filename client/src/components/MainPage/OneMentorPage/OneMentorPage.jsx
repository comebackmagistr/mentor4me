import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showApplications } from '../../../redux/applicationSlice';
import OneApplicationMentor from '../../OneApplicationMentor/OneApplicationMentor';

export default function OneMentorPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allMentors = useSelector((store) => store.userInfo);
  const oneMentor = allMentors[Number(id) - 1];

  const applications = useSelector((store) => store.application);
  //   console.log('applications', applications);

  useEffect(() => {
    dispatch(showApplications(id));
  }, []);

  return (
    <>
      <div className="blockItem" data-wow-duration="1.2s" data-wow-delay="0.8s">
        <div className="imgBlock">
          <img src={oneMentor?.photo} alt="img" className="imgCard" />
          <p className="reiting">9 / 10</p>
        </div>
        <div className="textCard">
          <div className="subtitleCard">{`${oneMentor?.firstName} ${oneMentor?.lastName}`}</div>
          <div className="jobName">
            {oneMentor?.profArea}
            {' '}
            - тупица
          </div>
          <div className="mentorDescr">
            {oneMentor?.aboutMe}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque pariatur minima quo, vitae minus labore quaerat temporibus odio aperiam aspernatur rerum provident molestias, recusandae ducimus ipsam. Illo, error mollitia.
          </div>
          <div className="scill">
            {oneMentor?.profScill.split(',').map((el) => (
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

      <div className="blockApplications">
        {applications && applications.map((el) => <OneApplicationMentor key={el.id} application={el} />)}

      </div>
    </>
  );
}
