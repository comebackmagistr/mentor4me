import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import {
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getLogout } from '../../redux/userSlice';
import '../../App.css';

export default function NavBar() {
  const userIsAuth = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const regMentorHandler = () => {
    navigate('/signup/mentor');
    handleClose();
  };

  const regStudentHandler = () => {
    navigate('/signup/student');
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          marginTop: '1%', backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid black',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="mainTextNavbar" to="/">MENTOR4ME</Link>
          </Typography>
          <Link className="linkInNav" to="/about">О нас</Link>
          {userIsAuth.firstName ? (
            <>
              <Link className="linkInNav" to="/mentorprofile">Профиль</Link>
              <Link className="linkInNav" to="/search">Поиск</Link>
              <Link className="linkInNav" to="/calendar">Календарь</Link>
              <Link className="linkInNav" to="/applications">Заявки</Link>
              <Link className="linkInNav" to="/mentor">Наши менторы</Link>

              <Button
                className="linkInNav"
                onClick={() => {
                  dispatch(getLogout());
                  navigate('/');
                }}
                color="inherit"
              >
                Выход

              </Button>
            </>
          ) : (
            <>
              <div>
                <Button
                  className="linkInNav"
                  variant="outlined"
                  color="inherit"
                  onClick={handleOpen}
                  style={{
                    border: 'none',
                    font: 'inherit',
                    color: 'inherit',
                    backgroundColor: 'transparent',
                  }}
                >
                  Регистрация

                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
                    Выбери Ментор ты или студент позорный
                  </DialogTitle>
                  <DialogActions style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  >
                    <button onClick={regMentorHandler} className="button-35" type="button">Ментор</button>
                    <button onClick={regStudentHandler} className="button-35" type="button">Студент</button>
                    {/* <Button variant="outlined" onClick={regMentorHandler}>Ментор</Button> */}
                    {/* <Button variant="outlined" onClick={regStudentHandler} autoFocus>Студент</Button> */}
                  </DialogActions>
                </Dialog>
              </div>
              <Link className="linkInNav" to="/user/login">Login</Link>
            </>
          )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}
