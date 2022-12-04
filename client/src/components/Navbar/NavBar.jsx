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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">MENTOR4ME</Link>
          </Typography>
          {userIsAuth.firstName ? (
            <>
              <Link to="/mentorprofile"><Button color="inherit">Профиль</Button></Link>
              <Link to="/search"><Button color="inherit">Поиск</Button></Link>
              <Link to="/calendar"><Button color="inherit">Календарь</Button></Link>
              <Link to="/applications"><Button color="inherit">Заявки</Button></Link>
              <Link to="/mentor"><Button color="inherit">Наши менторы</Button></Link>

              <Button
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
              <Link to="/user/login">Login</Link>
            </>
          )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}