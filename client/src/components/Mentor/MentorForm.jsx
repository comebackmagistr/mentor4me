import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { editMentor, showMentor } from '../../redux/slices/mentorSlice';

export default function Profile() {
  const mentor = useSelector((store) => store.mentorAuth);
  const [isTrue, setIsTrue] = useState(true); // для кнопки редактирования
  const [inputMentor, setInputMentor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zoom: '',
    phone: '',
    video: '',
    call: '',
    chat: '',
    price: '',
    password: '',
    education: '',
    job: '',
    profArea: '',
    profScill: '',
    aboutMe: '',
    portfolio: '',

  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMentor());
  }, []);
  const editHandler = () => {
    setIsTrue((prev) => !prev);
    dispatch(editMentor(mentor));
  };
  return (
    <Card sx={{ maxWidth: 900, flexDirection: 'row' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {isTrue === true ? (
            <>
              {mentor??.firstName}
              {' '}
              {mentor??.lastName}
            </>
          ) : (
            <>
              <input name="firstName" type="text" placeholder={mentor?.firstName} />
              <input name="lastName" type="text" placeholder={mentor?.lastName} />
            </>
          )}
        </Typography>
        <CardActions>
          <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Редактировать</Button>
          {!isTrue && <Button onClick={() => editHandler()} size="small">Сохранить изменения</Button> }
        </CardActions>

        <CardMedia
          component="img"
          height="140"
          image="./photo.jpeg"
          alt="photo"
        />
        <Typography variant="body2" color="text.secondary">
          {isTrue === true ? (
            mentor?.education
          ) : (
            <input name="education" type="text" placeholder={mentor?.education} />
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {isTrue === true ? (
            mentor?.aboutMe
          ) : (
            <input name="aboutMe" type="text" placeholder={mentor?.aboutMe} />
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          email:
          {' '}
          {mentor.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          zoom:
          {' '}
          {mentor.zoom}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          phone:
          {' '}
          {mentor.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          price:
          {' '}
          {mentor.price}
        </Typography>
        <h5>Профессиональные навыки</h5>
        <Typography variant="body2" color="text.secondary">
          {isTrue === true ? (
            mentor?.profArea
          ) : (
            <input name="profArea" type="text" placeholder={mentor?.profArea} />
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {isTrue === true ? (
            mentor?.profScill
          ) : (
            <input name="profScill" type="text" placeholder={mentor?.profScill} />
          )}
        </Typography>
        <CardActions>
          <Button size="small">Календарь занятий</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
