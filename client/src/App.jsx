import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/CropPhoto/MainPage';
import MentorNavBar from './components/Mentor/MentorNavBar';
import SignUpOne from './components/SignUpOne/SignUpOne';
import SignUpTwo from './components/SignUpTwo/SignUpTwo';
import MentorForm from './components/Mentor/MentorForm';
// import StudentForm from './components/Student/StudentForm';
import StudentNavBar from './components/Student/StudentNavBar';
import Search from './components/Search/Search';
import Crop from './components/CropPhoto/Crop';

function App() {
  return (
    <>
      <MentorNavBar />
      <StudentNavBar />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<MentorForm />} path="/mentorprofile" />
        {/* <Route element={<StudentForm />} path="/studentprofile" /> */}
        {/* строка 6 и 17 для проверки второго навбара студента */}
        <Route element={<Search />} path="/search" />
        <Route element={<Crop />} path="/input" />
        <Route element={<SignUpOne />} path="/signup1" />
        <Route element={<SignUpTwo />} path="/signup2" />
      </Routes>
    </>
  );
}

export default App;
