import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { showMentor } from '../../redux/mentorSlice';

export default function Profile() {
  const mentor = useSelector((store) => store.mentor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMentor());
  }, []);
  return (
    <Card sx={{ maxWidth: 900, flexDirection: 'row' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {mentor?.firstName}
          {' '}
          {mentor?.lastName}
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
        <Typography variant="body2" color="text.secondary">
          ВЕЛИКИЙУМВСЕЙГАЛАКТИКИ
        </Typography>
        <Typography variant="body2" color="text.secondary">
          info about mentor info about mentor info about mentor info about mentor info about mentor info about mentor info about mentor info about mentor info about mentor
        </Typography>
        <Typography variant="body2" color="text.secondary">
          email:
          {' '}
          {mentor?.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          zoom:
          {' '}
          {mentor?.zoom}
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
          ылавоылаоывлоа
        </Typography>
        <CardActions>
          <Button size="small">Календарь занятий</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
