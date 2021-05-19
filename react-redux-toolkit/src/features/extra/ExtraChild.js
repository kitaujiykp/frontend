import React from 'react';
import { useSelector } from 'react-redux';

export default function ExtraChild() {

  const name = useSelector( state => state.list.name );

  return (
    <div>
      {name}
    </div>
  );
}
