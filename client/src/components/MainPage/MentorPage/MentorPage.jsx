import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAllMentor } from '../../../redux/userInfoSlice';
import './Mentor.css';
import OneCardMentor from '../OneCardMentor';

export default function MentorPage() {
  const mentors = useSelector((state) => state.userInfo);

  //   console.log('mentors', mentors);
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

    <section className="mentorBlock">
      <h2 className="title">Наши менторы</h2>
      {currMentor && currMentor?.map((el) => <OneCardMentor key={el.id} mentor={el} />)}
      <div className="btn">
        <button onClick={() => setNumberMentors(numberMentors + 3)} className="button-34" type="submit">Подгрузить</button>
      </div>
    </section>

  );
}
