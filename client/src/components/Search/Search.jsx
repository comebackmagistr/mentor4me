import React from 'react';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { getSearch } from '../../redux/searchSlice';

function valuetext(valueOn) {
  return `${valueOn}°C`;
}

export default function Search() {
  const dispatch = useDispatch();
  const [valueOn, setValue] = React.useState([0, 5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const obj = Object.fromEntries(new FormData(e.target));
      dispatch(getSearch({ valueOn, obj }));
    }}
    >
      <input name="title" type="text" placeholder="введите желаемую специализацию" />
      <button type="submit">Найти</button>
      <Slider
        max={5000}
        getAriaLabel={() => 'Price range'}
        value={valueOn}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <input type="number" value={valueOn[0]} onChange={(e) => setValue((prev) => [Number(e.target.value), prev[1]])} />
      <input type="number" value={valueOn[1]} onChange={(e) => setValue((prev) => [prev[0], Number(e.target.value)])} />
      <div className="raiting">
        <span>Рейтинг</span>
        <input name="raiting" value="5" id="5" type="checkbox" />
        <label htmlFor="5">5+</label>
        <input name="raiting" value="7" id="7" type="checkbox" />
        <label htmlFor="7">7+</label>
        <input name="raiting" value="8" id="8" type="checkbox" />
        <label htmlFor="8">8+</label>
        <input name="raiting" value="Любой" id="all" type="checkbox" />
        <label htmlFor="all">Любой</label>
      </div>
      <div className="raiting">
        <span>Формат видеоконсультации</span>
        <input name="video" id="video" type="checkbox" />
        <label htmlFor="video">Видео</label>
        <input name="call" id="call" type="checkbox" />
        <label htmlFor="call">Звонок</label>
        <input name="chat" id="chat" type="checkbox" />
        <label htmlFor="chat">Чат</label>
      </div>
    </form>
  );
}
