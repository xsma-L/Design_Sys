import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  return (
    <>
      <div className='w-[100vh] h-[100vh] flex items-center justify-center'>
        <button className='w-fit h-[45px] bg-secondary-purple p-2 rounded shadow-black active:border-2 active:border-button-active active:text-button-active'>Inscription</button>
      </div>
    </>
  );
}

export default App;
