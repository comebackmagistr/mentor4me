import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { showStudent, editStudent } from '../../redux/slices/studentSlice';

export default function Profile() {
  const student = useSelector((store) => store.student);
  const [isTrue, setIsTrue] = useState(true);// для кнопки редактирования
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStudent());
  }, []);
  const editHandler = () => {
    setIsTrue((prev) => !prev);
    dispatch(editStudent(student));
  };
  return (
    <Card sx={{ maxWidth: 900 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {isTrue === true ? (
            <>
              {student?.firstName}
              {' '}
              {student?.lastName}
            </>
          ) : (
            <>
              <input name="firstName" type="text" placeholder={student?.firstName} />
              <input name="lastName" type="text" placeholder={student?.lastName} />
            </>
          )}
        </Typography>
        <CardActions>
          <Button onClick={() => setIsTrue((prev) => !prev)} size="small">Редактировать</Button>
          {!isTrue && <Button onClick={() => editHandler()} size="small">Сохранить</Button> }
        </CardActions>
        <CardMedia
          component="img"
          height="140"
          image="./photo.jpeg"
          alt="photo"
        />
        <h5>Контакты:</h5>
        <Typography variant="body2" color="text.secondary">
          email:
          {' '}
          {isTrue === true ? (
            student?.email
          ) : (
            <input name="email" type="text" placeholder={student?.email} />
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          zoom:
          {' '}
          {isTrue === true ? (
            student?.zoom
          ) : (
            <input name="zoom" type="text" placeholder={student?.zoom} />
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          phone:
          {' '}
          {isTrue === true ? (
            student?.phone
          ) : (
            <input name="phone" type="text" placeholder={student?.phone} />
          )}
        </Typography>
        <h5>Профессиональная сфера:</h5>
        <Typography variant="body2" color="text.secondary">
          {isTrue === true ? (
            student?.profScill // в бд надо ли добавить профориент?
          ) : (
            <input name="profScill" type="text" placeholder={student?.profScill} />
          )}
        </Typography>
        <CardActions>
          <Button size="small">Записаться на занятие</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
