import React from 'react';

function Text(content, passwordForget) {
    return (
        <>
            { passwordForget ?
                <p className=''>{content}  /* Import Link */</p>
            :
                <p className=''>{content}</p> 
            }
        </>
    );
}

export default Text;