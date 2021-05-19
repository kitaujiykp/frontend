import React from 'react';
import {
  changeName,
  selectName
} from './listSlice';

import { useAppSelector, useAppDispatch } from '../../app/hooks';


export default function List() {
  
  const name = useAppSelector(selectName);
  const dispatch = useAppDispatch();
  
  return(
    <>
      <button onClick={()=>dispatch(changeName())}>
        change
      </button>
      <div>
        {name}
      </div>
    </>
  )
}