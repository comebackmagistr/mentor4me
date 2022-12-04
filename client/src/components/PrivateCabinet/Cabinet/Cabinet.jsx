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

export default function Profile() {
  const user = useSelector((store) => store.user);
  console.log(user, 'meeeentor');
  const [isTrue, setIsTrue] = useState(true); // для кнопки редактирования
  const [inputMentor, setInputMentor] = useState({
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

  const [inputStudent, setInputStudent] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    zoom: user.zoom,
    phone: user.phone,
  });
  console.log(inputMentor, 'inputtttttmeeeentor');
  console.log(inputStudent, 'inputttttstudeeeent');
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputMentor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editHandler = () => {
    setIsTrue((prev) => !prev);
    dispatch(editMentor(inputMentor));
  };

  const editHandlerSt = () => {
    setIsTrue((prev) => !prev);
    dispatch(editStudent(inputStudent));
  };

  return (
    <>
      {user?.mentor === true ? (
        <Card sx={{ maxWidth: 900, flexDirection: 'row' }}>
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
                <Typography variant="body2" color="text.secondary">
                  Образование:
                  {' '}
                  {user?.education}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Информация обо мне:
                  {' '}
                  {user?.aboutMe}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  email:
                  {' '}
                  {user?.email }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  zoom:
                  {' '}
                  {user?.zoom }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  phone:
                  {' '}
                  {user?.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  price:
                  {' '}
                  {user?.price}
                </Typography>
                <h5>Профессиональные навыки</h5>
                <Typography variant="body2" color="text.secondary">
                  Профессиональные навыки:
                  {' '}
                  {user?.profArea}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Профессиональные скиллы:
                  {' '}
                  {user?.profScill}
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
                    image={user?.photo}
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
      )
        : (
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
        )}
    </>
  );
}
