import React from 'react';

function Button(action) {
    return (
        <button className='w-fit bg-secondary-purple py-[12px] px-[20px] md:px-[30px] lg:px-[40px] rounded-[5px] shadow-black hover:text-button-active active:border-2 active:border-button-active active:text-button-active'>{action}</button>
    );
}

export default Button;