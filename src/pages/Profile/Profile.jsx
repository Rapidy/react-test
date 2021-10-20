import React from 'react';
import './profile.sass';

import { useSelector } from 'react-redux';

export default function Profile() {
  const login = useSelector((state) => state.login);

  return (
    <div className='profile'>
      <div className='container'>
        <h2>Профиль</h2>
        <h1>Ваш логин: {login}</h1>
      </div>
    </div>
  );
}
