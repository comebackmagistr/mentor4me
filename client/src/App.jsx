import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DownLoad from './components/DownLoad';
import MainPage from './components/MainPage';
import MentorNavBar from './components/Mentor/MentorNavBar';
import MentorForm from './components/Mentor/MentorForm';
// import StudentForm from './components/Student/StudentForm';
import StudentNavBar from './components/Student/StudentNavBar';
import Search from './components/Search/Search';
// import FileInput from './components/FileInput';
import Crop from './components/Crop';

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
        <Route element={<DownLoad />} path="/down" />
        <Route element={<Crop />} path="/input" />

      </Routes>
    </>
  );
}

export default App;
