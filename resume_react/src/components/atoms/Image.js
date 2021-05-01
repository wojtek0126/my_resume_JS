import React from 'react';

const Image = ({className, src, alt}) => {
    return (
            <img src={src} className={className} alt={alt} />
            )
}

export default Image;