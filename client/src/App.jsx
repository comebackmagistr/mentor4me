import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import MainPage from './components/MainPage';
import MentorNavBar from './components/Mentor/MentorNavBar';
import MentorForm from './components/Mentor/MentorForm';
// import StudentForm from './components/Student/StudentForm';
import StudentNavBar from './components/Student/StudentNavBar';
import Search from './components/Search';
import Crop from './components/CropPhoto/Crop';
import { fetchCheck } from './redux/userSlice';
import LoginAll from './components/Reg&Auth/LoginAll';
import SignUpMentor from './components/Reg&Auth/SignUpMentor';
import SignUpStudent from './components/Reg&Auth/SignUpStudent';
import NewCalendar from './components/Calendar/NewCalendar';
import AlertDialog from './components/Calendar/AlertDialog';
import MentorPage from './MentorPage/MentorPage';

function App() {
  const navbar = useSelector((store) => store.navbar);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCheck());
  }, []);
  return (
    <>
      {navbar === 'signup1'
        ? (<StudentNavBar />) : (<MentorNavBar />)}

      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<MentorForm />} path="/mentorprofile" />
        {/* <Route element={<StudentForm />} path="/studentprofile" /> */}
        {/* строка 6 и 17 для проверки второго навбара студента */}
        <Route element={<Search />} path="/search" />
        <Route element={<Crop />} path="/input" />
        <Route element={<NewCalendar />} path="/calendar" />
        <Route element={<MentorPage />} path="/mentor" />
        <Route element={<SignUpMentor />} path="/signup/mentor" />
        <Route element={<SignUpStudent />} path="/signup/student" />
        <Route element={<LoginAll />} path="/user/login" />
        <Route element={<AlertDialog />} path="alert" />

      </Routes>
    </>
  );
}

export default App;
