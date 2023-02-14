import React from 'react';

function Link(value, dest) {
    return(
        <a className=' ml-2 ease-in duration-300 p-[4px] hover:bg-secondary-light-blue font-bold' href={dest}>{value}</a>
    );
}

export default  Link