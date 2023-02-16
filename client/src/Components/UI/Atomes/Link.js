import React from 'react';

function Link(linkContent, linkHref) {
    return(
        <a className=' ml-2 ease-in duration-300 p-[4px] hover:bg-secondary-light-blue font-bold' href={linkHref}>{linkContent}</a>
    );
}

export default  Link