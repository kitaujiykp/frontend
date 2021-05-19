import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeName,
  changeSchoolAsync,
  selectName,
  selectSchool
} from './listSlice';

export function List() {
  
  // console.log(useSelector((state)=>state))
  
  const name = useSelector(selectName);
  const school = useSelector(selectSchool);
  
  const dispatch = useDispatch();
  
  return (
    <div>
      <button
        onClick={() => dispatch(changeName())}
      >
        changeName
      </button>
      <button
        onClick={() => dispatch(changeSchoolAsync())}
        >
        changeSchoolAsync
      </button>
      <ul>
        <li>{name}</li>
        <li>{school}</li>
      </ul>
    </div>
  );
}
