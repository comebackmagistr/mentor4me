import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { showStudent } from '../../redux/studentSlice';

export default function Profile() {
  const student = useSelector((store) => store.student);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStudent());
  }, []);
  return (
    <Card sx={{ maxWidth: 900 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {student.firstName}
          {' '}
          {student.lastName}
        </Typography>
        <CardActions>
          <Button size="small">Редактировать</Button>
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
          {student.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          zoom:
          {' '}
          {student.zoom}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          phone:
          {' '}
          {student.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          price:
          {' '}
          {student.price}
        </Typography>
        <h5>Профессиональная сфера:</h5>
        <Typography variant="body2" color="text.secondary">
          врапвророаы
        </Typography>
        <CardActions>
          <Button size="small">Записаться на занятие</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
