import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function NavBar() {
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

          <Link to="/mentorprofile"><Button color="inherit">Профиль</Button></Link>
          <Link to="/calendar"><Button color="inherit">Календарь</Button></Link>
          <Link to="/applications"><Button color="inherit">Заявки</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
