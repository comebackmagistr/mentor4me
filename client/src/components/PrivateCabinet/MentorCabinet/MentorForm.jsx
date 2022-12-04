import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { editMentor } from '../../../redux/userSlice';

export default function Profile() {
  const mentor = useSelector((store) => store.user);
  console.log(mentor, 'meeeentor');
  const [isTrue, setIsTrue] = useState(true); // для кнопки редактирования
  const [inputMentor, setInputMentor] = useState({
    firstName: mentor.firstName,
    lastName: mentor.lastName,
    email: mentor.email,
    zoom: mentor.zoom,
    phone: mentor.phone,
    video: mentor.video,
    call: mentor.call,
    chat: mentor.chat,
    price: mentor.price,
    education: mentor.education,
    job: mentor.job,
    profArea: mentor.profArea,
    profScill: mentor.profScill,
    aboutMe: mentor.aboutMe,
    portfolio: mentor.portfolio,

  });
  console.log(inputMentor, 'inputtttttmeeeentor');
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputMentor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editHandler = () => {
    setIsTrue((prev) => !prev);
    dispatch(editMentor(inputMentor));
  };

  return (
    <Card sx={{ maxWidth: 900, flexDirection: 'row' }}>
      <CardContent>
        {isTrue === true ? (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {mentor?.firstName}
              {' '}
              {mentor?.lastName}
            </Typography>
            <CardActions>
              <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Редактировать</Button>
              {!isTrue && <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Сохранить изменения</Button> }
            </CardActions>
            <CardMedia
              component="img"
              height="140"
              image={mentor?.photo}
              alt="photo"
            />
            <Typography variant="body2" color="text.secondary">
              Образование:
              {' '}
              {mentor?.education}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Информация обо мне:
              {' '}
              {mentor?.aboutMe}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              email:
              {' '}
              {mentor?.email }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              zoom:
              {' '}
              {mentor?.zoom }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              phone:
              {' '}
              {mentor?.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              price:
              {' '}
              {mentor?.price}
            </Typography>
            <h5>Профессиональные навыки</h5>
            <Typography variant="body2" color="text.secondary">
              Профессиональные навыки:
              {' '}
              {mentor?.profArea}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Профессиональные скиллы:
              {' '}
              {mentor?.profScill}
            </Typography>
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
                <input name="firstName" type="text" placeholder={inputMentor?.firstName} value={inputMentor?.firstName} onChange={(e) => inputHandler(e)} />
                Фамилия:
                {' '}
                <input name="lastName" type="text" placeholder={inputMentor?.lastName} value={inputMentor?.lastName} onChange={(e) => inputHandler(e)} />
              </Typography>
              <CardActions>
                <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Отменить изменения</Button>
                {!isTrue && <Button type="submit" size="small" onClick={() => editHandler()}>Сохранить изменения</Button> }
              </CardActions>
              <CardMedia
                component="img"
                height="140"
                image={mentor?.photo}
                alt="photo"
              />
              <Typography variant="body2" color="text.secondary">
                Образование:
                {' '}
                <input name="education" type="text" placeholder={inputMentor?.education} value={inputMentor?.education} onChange={(e) => inputHandler(e)} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Информация обо мне:
                {' '}
                <input name="aboutMe" type="text" placeholder={inputMentor?.aboutMe} value={inputMentor?.aboutMe} onChange={(e) => inputHandler(e)} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                email:
                {' '}
                <input name="email" type="text" placeholder={inputMentor?.email} value={inputMentor?.email} onChange={(e) => inputHandler(e)} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                zoom:
                {' '}
                <input name="zoom" type="text" placeholder={inputMentor?.zoom} value={inputMentor?.zoom} onChange={(e) => inputHandler(e)} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                phone:
                {' '}
                <input name="phone" type="text" placeholder={inputMentor?.phone} value={inputMentor?.phone} onChange={(e) => inputHandler(e)} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                price:
                {' '}
                <input name="price" type="text" placeholder={inputMentor?.price} value={inputMentor?.price} onChange={(e) => inputHandler(e)} />
              </Typography>
              <h5>Профессиональные навыки</h5>
              <Typography variant="body2" color="text.secondary">
                Профессиональные навыки:
                {' '}
                <input name="profArea" type="text" placeholder={inputMentor?.profArea} value={inputMentor?.profArea} onChange={(e) => inputHandler(e)} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Профессиональные скиллы:
                {' '}
                <input name="profScill" type="text" placeholder={inputMentor?.profScill} value={inputMentor?.profScill} onChange={(e) => inputHandler(e)} />
              </Typography>
            </form>
          )}
        <CardActions>
          <Button size="small">Календарь занятий</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
