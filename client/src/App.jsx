import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<Search />} path="/search" />
      </Routes>
    </>
  );
}

export default App;
