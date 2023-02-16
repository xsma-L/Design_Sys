import { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!value) {
      
      console.log('Veuillez saisir une valeur');
    } else if (value !== 'valeur attendue') {
      
      console.log('Veuillez saisir une valeur correcte');
    } else {
      
      console.log('Formulaire soumis avec succès');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          name="valeur"
          id="valeur"
          value={value}
          onChange={handleChange}
          className="border border-gray-300 rounded-md py-2 px-4 block w-full leading-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          placeholder="Saisir une valeur"
        />
        {(!value || value !== 'valeur attendue') && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
        Soumettre
      </button>
    </form>
  );
  
}
export default App;

/**import './App.css';


function App() {

  return (
    <>
      <div className='w-[100vh] h-[100vh] flex items-center justify-center'>
        <input class="border-2 border-gray-400 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" type="password" placeholder="Entrez votre texte ici">
        </input>
      </div>
    </>
  );
}

export default App;*/
