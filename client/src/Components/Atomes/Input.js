import React from 'react';

function Input(inputType) {
    return (
        <div>
            <input class="border-2 border-gray-400 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" placeholder="Entrez votre texte ici">
            </input>
        </div>
    );
}

export default Input;