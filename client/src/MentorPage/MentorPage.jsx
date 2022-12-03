import React from 'react';
import './Mentor.css';

export default function MentorPage() {
  return (

    <section className="mentorBlock">
      <div className="container">
        <h2 className="title">Наши менторы</h2>
        <div className="blockItem" data-wow-duration="1.2s" data-wow-delay="0.8s">
          <div className="imgBlock">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVn-RVo12JBJq8FDGKViN5KtJL6_OPXIuHA&usqp=CAU" alt="Ирина Иванченко" className="imgCard" />
            <p className="reiting">9 / 10</p>
          </div>
          <div className="textCard">
            <div className="subtitleCard">Петр Федорищев</div>
            <div className="jobName">Дизайнер UI</div>
            <div className="mentorDescr">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam voluptas veniam iusto dolorem? Qui asperiores ratione quam deserunt! Veniam fuga aliquam voluptates laudantium consequuntur minus saepe odit doloribus fugiat a.
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
            <div className="price">1800 руб./час</div>
            <div className="like">👍</div>
          </div>
        </div>
      </div>
    </section>

  );
}
