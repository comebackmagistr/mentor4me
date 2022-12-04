import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { CardMedia } from '@mui/material';
import { editStudent } from '../../../redux/userInfoSlice';

export default function Profile() {
  const student = useSelector((store) => store.user);
  const [isTrue, setIsTrue] = useState(true);// для кнопки редактирования
  const [inputStudent, setInputStudent] = useState({
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    zoom: student.zoom,
    phone: student.phone,
  });
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editHandler = () => {
    setIsTrue((prev) => !prev);
    dispatch(editStudent(inputStudent));
  };
  return (
    <Card sx={{ maxWidth: 900 }}>
      <CardContent>
        {isTrue === true ? (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {student?.firstName}
              {' '}
              {student?.lastName}
            </Typography>
            <CardActions>
              <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Редактировать</Button>
              {!isTrue && <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Сохранить изменения</Button> }
            </CardActions>
            <CardMedia
              component="img"
              height="140"
              image={student?.photo}
              alt="photo"
            />
            <h5>Контакты:</h5>
            <Typography variant="body2" color="text.secondary">
              email:
              {student?.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              zoom:
              {' '}
              {student?.zoom}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              phone:
              {' '}
              {student?.phone}
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
                <input name="firstName" type="text" placeholder={inputStudent?.firstName} value={inputStudent?.firstName} onChange={(e) => inputHandler(e)} />
                Фамилия:
                {' '}
                <input name="lastName" type="text" placeholder={inputStudent?.lastName} value={inputStudent?.lastName} onChange={(e) => inputHandler(e)} />
              </Typography>
              <CardActions>
                <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Отменить изменения</Button>
                {!isTrue && <Button onClick={() => editHandler()} size="small">Сохранить изменения</Button> }
              </CardActions>
              <h5>Контакты:</h5>
              <Typography variant="body2" color="text.secondary">
                email:
                <input name="email" type="text" placeholder={inputStudent?.email} value={inputStudent?.email} onChange={(e) => inputHandler(e)} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                zoom:
                <input name="zoom" type="text" placeholder={inputStudent?.zoom} value={inputStudent?.zoom} onChange={(e) => inputHandler(e)} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                phone:
                <input name="phone" type="text" placeholder={inputStudent?.phone} value={inputStudent?.phone} onChange={(e) => inputHandler(e)} />
              </Typography>
            </form>
          )}
        <CardActions>
          <Button size="small">Записаться на занятие</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
