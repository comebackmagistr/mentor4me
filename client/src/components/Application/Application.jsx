import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllApplicationMentor, getAllApplicationStudent } from '../../redux/applicationSlice';
import ApplicationFormbutt from './ApplicationFormbutt';
import ApplicationFormMentor from './ApplicationFormMentor';

export default function Application() {
  const user = useSelector((store) => store.user);
  const allApplications = useSelector((store) => store.application);
  const dispatch = useDispatch();
  useEffect(() => {
    user?.mentor ? dispatch(getAllApplicationMentor()) : dispatch(getAllApplicationStudent());
  }, [user]);

  return (
    <div>
      {user?.mentor === true ? (
        <div>
          Мои заявки:
          {allApplications.length > 0 ? (
            <>
              {allApplications.map((el) => <ApplicationFormMentor el={el} />)}
            </>
          ) : (
            <span>Заявок пока нет.</span>
          )}
        </div>
      )
        : (
          <div>
            Мои заявки:
            {allApplications.lengthh > 0 ? (
              <>
                {allApplications.map((el) => <ApplicationFormbutt el={el} />)}
              </>
            ) : (
              <span>Заявок пока нет.</span>
            )}
          </div>
        )}
    </div>
  );
}
