import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { editMentor } from '../../../redux/userSlice';
import { editStudent } from '../../../redux/userInfoSlice';
import './Cabinet.css';

export default function Profile() {
  const user = useSelector((store) => store.user);
  console.log(user, 'meeeentor');
  const [isTrue, setIsTrue] = useState(true); // для кнопки редактирования
  const [inputUser, setInputUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    zoom: user.zoom,
    phone: user.phone,
    video: user.video,
    call: user.call,
    chat: user.chat,
    price: user.price,
    education: user.education,
    job: user.job,
    profArea: user.profArea,
    profScill: user.profScill,
    aboutMe: user.aboutMe,
    portfolio: user.portfolio,
  });

  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editHandler = () => {
    setIsTrue((prev) => !prev);
    if (!user?.isMentor === true) {
      dispatch(editMentor(inputUser));
    } else {
      dispatch(editStudent(inputUser));
    }
  };

  return (
    <div className="cabinetBlock" data-wow-duration="1.2s" data-wow-delay="0.8s">
      {!user?.isMentor === true ? (
        <div className="cardBlock">
          {isTrue === true ? (
            <>

              <div className="imgBlockCab">
                <div className="nameCab">{`${user?.firstName} ${user?.lastName}`}</div>
                <div className="cardBtnBlock">
                  <Button onClick={() => setIsTrue((prev) => !prev)} style={{ textTransform: 'none' }} size="small">Редактировать</Button>
                  {!isTrue && <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Сохранить изменения</Button> }
                </div>
                <img src={`/photos/${user?.photo}`} alt="img" className="imgCab" />
              </div>

              <div className="middleCard">
                {/* <div className="mentorEducation">Образование</div> */}
                <div className="education">{user?.job}</div>
                <div className="aboutMentor">
                  {user?.aboutMe}
                </div>
                <div className="scill">
                  <div className="infoBlock">
                    <div className="subInfoItem">
                      <img src="/icons/dollar.png" alt="img" className="imgInfoMail" />
                      <div className="textInfo">{user?.price}</div>
                    </div>
                    <div className="subInfoItem">
                      <img src="/icons/email.png" alt="img" className="imgInfoMail" />
                      <div className="textInfo">{user?.email }</div>
                    </div>
                    <div className="subInfoItem">
                      <img src="/icons/zoom.png" alt="img" className="imgInfo" />
                      <div className="textInfo">{user?.zoom }</div>
                    </div>
                    <div className="subInfoItem">
                      <img src="/icons/phone.png" alt="img" className="imgInfoMail" />
                      <div className="textInfo">{user?.phone}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rightBlock">
                <div className="rightTitle">Профессиональные навыки</div>
                <div className="scillBlock">
                  <div className="skillItem">{user?.profArea}</div>
                </div>
                <div className="scillBlock">
                  <div className="skillItem">{user?.profScill}</div>
                </div>
                <div className="calendarDiv">
                  <Button size="small" className="calendar">Календарь занятий</Button>
                </div>
              </div>

            </>
          )
            : (
              <form onSubmit={(e) => {
                e.preventDefault();
                setIsTrue((prev) => !prev);
                dispatch(editMentor(Object.fromEntries(new FormData(e.target))));
              }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  Имя:
                  {' '}
                  <input name="firstName" type="text" placeholder={user?.firstName} value={inputUser?.firstName} onChange={(e) => inputHandler(e)} />
                  Фамилия:
                  {' '}
                  <input name="lastName" type="text" placeholder={user?.lastName} value={inputUser?.lastName} onChange={(e) => inputHandler(e)} />
                </Typography>
                <CardActions>
                  <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Отменить изменения</Button>
                  {!isTrue && <Button type="submit" size="small" onClick={() => editHandler()}>Сохранить изменения</Button> }
                </CardActions>
                <CardMedia
                  component="img"
                  height="140"
                  image={user?.photo}
                  alt="photo"
                />
                <Typography variant="body2" color="text.secondary">
                  Образование:
                  {' '}
                  <input name="education" type="text" placeholder={user?.education} value={inputUser?.education} onChange={(e) => inputHandler(e)} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Информация обо мне:
                  {' '}
                  <input name="aboutMe" type="text" placeholder={user?.aboutMe} value={inputUser?.aboutMe} onChange={(e) => inputHandler(e)} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  email:
                  {' '}
                  <input name="email" type="text" placeholder={user?.email} value={inputUser?.email} onChange={(e) => inputHandler(e)} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  zoom:
                  {' '}
                  <input name="zoom" type="text" placeholder={user?.zoom} value={inputUser?.zoom} onChange={(e) => inputHandler(e)} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  phone:
                  {' '}
                  <input name="phone" type="text" placeholder={user?.phone} value={inputUser?.phone} onChange={(e) => inputHandler(e)} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  price:
                  {' '}
                  <input name="price" type="text" placeholder={user?.price} value={inputUser?.price} onChange={(e) => inputHandler(e)} />
                </Typography>
                <h5>Профессиональные навыки</h5>
                <Typography variant="body2" color="text.secondary">
                  Профессиональные навыки:
                  {' '}
                  <input name="profArea" type="text" placeholder={user?.profArea} value={inputUser?.profArea} onChange={(e) => inputHandler(e)} />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Профессиональные скиллы:
                  {' '}
                  <input name="profScill" type="text" placeholder={user?.profScill} value={inputUser?.profScill} onChange={(e) => inputHandler(e)} />
                </Typography>
              </form>
            )}
        </div>
      )
        : (
          <section className="boxcontainer" data-wow-duration="1.2s" data-wow-delay="0.8s">
            <CardContent>
              {isTrue === true ? (
                <>
                  <Typography gutterBottom variant="h5" component="div">
                    {user?.firstName}
                    {' '}
                    {user?.lastName}
                  </Typography>
                  <CardActions>
                    <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Редактировать</Button>
                    {!isTrue && <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Сохранить изменения</Button> }
                  </CardActions>
                  <CardMedia
                    component="img"
                    height="140"
                    image={user?.photo}
                    alt="photo"
                  />
                  <h5>Контакты:</h5>
                  <Typography variant="body2" color="text.secondary">
                    email:
                    {user?.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    zoom:
                    {' '}
                    {user?.zoom}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    phone:
                    {' '}
                    {user?.phone}
                  </Typography>
                </>
              )
                : (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    setIsTrue((prev) => !prev);
                    dispatch(editStudent(Object.fromEntries(new FormData(e.target))));
                  }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      Имя:
                      {' '}
                      <input name="firstName" type="text" placeholder={inputUser?.firstName} value={inputUser?.firstName} onChange={(e) => inputHandler(e)} />
                      Фамилия:
                      {' '}
                      <input name="lastName" type="text" placeholder={inputUser?.lastName} value={inputUser?.lastName} onChange={(e) => inputHandler(e)} />
                    </Typography>
                    <CardActions>
                      <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Отменить изменения</Button>
                      {!isTrue && <Button onClick={() => editHandler()} size="small">Сохранить изменения</Button> }
                    </CardActions>
                    <h5>Контакты:</h5>
                    <Typography variant="body2" color="text.secondary">
                      email:
                      <input name="email" type="text" placeholder={inputUser?.email} value={inputUser?.email} onChange={(e) => inputHandler(e)} />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      zoom:
                      <input name="zoom" type="text" placeholder={inputUser?.zoom} value={inputUser?.zoom} onChange={(e) => inputHandler(e)} />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      phone:
                      <input name="phone" type="text" placeholder={inputUser?.phone} value={inputUser?.phone} onChange={(e) => inputHandler(e)} />
                    </Typography>
                  </form>
                )}
              <CardActions>
                <Button size="small">Записаться на занятие</Button>
              </CardActions>
            </CardContent>
          </section>
        )}
    </div>
  );
}
