import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import MentorNavBar from './components/Mentor/MentorNavBar';
import MentorForm from './components/Mentor/MentorForm';
// import StudentForm from './components/Student/StudentForm';
import StudentNavBar from './components/Student/StudentNavBar';

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
      </Routes>
    </>
  );
}

export default App;
