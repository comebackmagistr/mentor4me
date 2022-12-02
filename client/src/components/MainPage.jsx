import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNavbar } from '../redux/navbarSlice';

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNavbar('mainpage'));
  }, []);
  return (
    <div>MainPage</div>
  );
}
