import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Cabinet from './components/PrivateCabinet/Cabinet';
// import StudentForm from './components/Student/StudentForm';
import Search from './components/Search';
import Crop from './components/CropPhoto/Crop';
import { fetchCheck } from './redux/userSlice';
import LoginAll from './components/Reg&Auth/LoginAll';
import SignUpMentor from './components/Reg&Auth/SignUpMentor';
import SignUpStudent from './components/Reg&Auth/SignUpStudent';
import NewCalendar from './components/Calendar/NewCalendar';
import AlertDialog from './components/Calendar/AlertDialog';
import MentorPage from './components/MainPage/MentorPage';
import About from './components/About/About';
import Application from './components/Application/Application';
import OneCardApplication from './components/Application/OneCardApplication';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCheck());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<Cabinet />} path="/profile" />
        <Route element={<Application />} path="/applications" />
        <Route element={<OneCardApplication />} path="/applications/:id" />
        <Route element={<Search />} path="/search" />
        <Route element={<Crop />} path="/input" />
        <Route element={<NewCalendar />} path="/calendar" />
        <Route element={<MentorPage />} path="/mentor" />
        <Route element={<SignUpMentor />} path="/signup/mentor" />
        <Route element={<SignUpStudent />} path="/signup/student" />
        <Route element={<LoginAll />} path="/user/login" />
        <Route element={<AlertDialog />} path="alert" />
        <Route element={<About />} path="/about" />

      </Routes>
    </>
  );
}

export default App;
