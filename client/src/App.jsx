import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DownLoad from './components/DownLoad';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
// import FileInput from './components/FileInput';
import Crop from './components/Crop';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<DownLoad />} path="/down" />
        <Route element={<Crop />} path="/input" />

      </Routes>
    </>
  );
}

export default App;
