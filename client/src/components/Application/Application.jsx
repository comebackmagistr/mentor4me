import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, showMentor } from '../../redux/userInfoSlice';

export default function Application() {
  const mentors = useSelector((store) => store.userInfo);
  const x = showMentor();
  console.log(x);

  const allMentor = useSelector((store) => store.mentor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showAllMentor());
  }, []);

  return (
    <div>
      <div>Выберите ментора</div>
      <div>
        {mentors.map((el) => (
          <div>
            <span>
              {el?.firstName}
              {' '}
              {el?.lastName}
            </span>
            <span>{el?.photo}</span>
            <span>{el?.profArea}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
