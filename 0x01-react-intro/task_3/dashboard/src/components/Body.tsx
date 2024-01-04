import React from 'react';

export default function Body() {
  return (
    <main>
      <p>Login to access the full dashboard</p>
      <div className='inputs'>
        <span>
          <label htmlFor='email'>Email: </label>
          <input id='email' type='email' />
        </span>
        <span>
          <label htmlFor='password'>Password: </label>
          <input id='password' type='email' />
        </span>
        <button>OK</button>
      </div>
    </main>
  );
}
