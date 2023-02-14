import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  return (
    <>
      <div className='w-[100vh] h-[100vh] flex flex-col items-center justify-evenly'>
        <p className=''>Not signed up ?<a className='ml-2 ease-in duration-300 p-[4px] hover:bg-secondary-light-blue font-bold' href='/'>Register</a></p>
        <button className='w-fit bg-secondary-purple py-[12px] px-[20px] md:px-[30px] lg:px-[40px] rounded-[5px] shadow-black hover:text-button-active active:border-2 active:border-button-active active:text-button-active'>Inscription</button>
      </div>
    </>
  );
}

export default App;
