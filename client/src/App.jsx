import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import SignUpOne from './components/SignUpOne/SignUpOne';
import SignUpTwo from './components/SignUpTwo/SignUpTwo';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<SignUpOne />} path="/signup1" />
        <Route element={<SignUpTwo />} path="/signup2" />
      </Routes>
    </>
  );
}

export default App;
