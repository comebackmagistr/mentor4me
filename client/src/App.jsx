import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './components/MainPage';
import MentorNavBar from './components/Mentor/MentorNavBar';
import SignUpOne from './components/SignUpMentor/SignUpMentor';
import SignUpTwo from './components/SignUpStudent/SignUpStudent';
import MentorForm from './components/Mentor/MentorForm';
// import StudentForm from './components/Student/StudentForm';
import StudentNavBar from './components/Student/StudentNavBar';
import Search from './components/Search/Search';
import Crop from './components/CropPhoto/Crop';
import { fetchCheck } from './redux/userSlice';

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

        <Route element={<SignUpOne />} path="/signup/mentor" />
        <Route element={<SignUpTwo />} path="/signup/student" />
      </Routes>
    </>
  );
}

export default App;
