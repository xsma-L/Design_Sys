import React from 'react';
import Link from '../Atomes/Link';

function Text(content, withLink, isLInk, linkContent, linkHref) {
    return (
        <>
            { withLink ?
                isLInk ?
                    <Link color={true} linkContent={''} linkHref={''} />
                    :
                    <p className=''>{content} <Link linkContent={linkContent} linkHref={linkHref} /> </p>
            :
                <p className=''>{content}</p> 
            }
        </>
    );
}

export default Text;