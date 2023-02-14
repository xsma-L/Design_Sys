import React from 'react';

function Button(action) {
    return (
        <button className='w-fit h-[45px] bg-secondary-purple p-2 rounded shadow-black active:border-2 active:border-button-active active:text-button-active'>{action}</button>
    );
}

export default Button;