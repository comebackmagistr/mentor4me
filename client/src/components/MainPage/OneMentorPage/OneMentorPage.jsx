import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField,
} from '@mui/material';
import { postReview, showReviews } from '../../../redux/reviewsSlice';
import OneApplicationMentor from '../../OneApplicationMentor/OneApplicationMentor';
import './OneMentorPage.css';
import { showAllMentor } from '../../../redux/userInfoSlice';

export default function OneMentorPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allMentors = useSelector((store) => store.userInfo);
  const oneMentor = allMentors.filter((mentor) => Number(mentor.id) === Number(id));
  useEffect(() => {
    dispatch(showAllMentor());
  }, []);
  // ниже код для пагинации reviews
  const reviews = useSelector((store) => store.reviews);
  const [numberReviews, setNumberReviews] = useState(3);
  const currReviews = reviews.slice(0, numberReviews);

  useEffect(() => {
    dispatch(showReviews(id));
  }, []);

  /// /// ниже логика модалки
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /// / ниже логика на отправку отзыва

  const [inputReview, setInputReview] = useState({ comment: '', rating: '' });
  const inputHandler = (e) => {
    setInputReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log('inputReview', inputReview);

  const submitInputs = () => {
    // e.preventDefault();
    dispatch(postReview(inputReview));
  };

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
            {oneMentor[0].profScill.length > 0 ? (oneMentor[0]?.profScill.split(',').map((el) => (
              <div className="scillBlock" key={el}>
                <div className="skillItem">{el}</div>
              </div>
            ))) : (
              <div className="scillBlock">
                <div className="skillItem">Навыки не указаны</div>
              </div>
            ) }
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

        {/* модалка на отправку отзыва */}
        <div>
          <Dialog open={open} onClose={handleClose}>
            {/* <DialogTitle>Subscribe</DialogTitle> */}
            <DialogContent style={{ width: '500px' }}>
              <TextField
                type="text"
                value={inputReview?.comment}
                style={{ width: '99%' }}
                onChange={(e) => inputHandler(e)}
                id="outlined-multiline-static"
                label="Напишите отзыв . . ."
                multiline
                rows={4}
                name="comment"
              />
              <TextField
                type="text"
                value={inputReview?.rating}
                style={{ width: '20%' }}
                onChange={(e) => inputHandler(e)}
                id="outlined-multiline-static"
                label="Rating . . ."
                multiline
                name="rating"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => submitInputs()} color="primary">
                Отправить
              </Button>

            </DialogActions>
          </Dialog>
        </div>
        {/* модалка на отправку отзыва */}

        <div className="subReview">
          <div className="titleReview">
            Отзывы
          </div>
          <div className="btnReview">
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleOpen}
              className="button-34"
              type="submit"
            >
              <span className="btnText">Оставить отзыв</span>
            </Button>
          </div>
        </div>

        {currReviews && currReviews.map((el) => <OneApplicationMentor key={el.id} review={el} />)}
        <div className="btnDiv">
          <button onClick={() => setNumberReviews(numberReviews + 3)} className="button-34" type="submit">Еще отзывы</button>
        </div>
      </div>
    </>
  );
}
