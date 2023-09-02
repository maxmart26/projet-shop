import React from 'react';

const Image_top = ({alt, image}) => {
    return (
        <div id='image-top'>
            <img src={image} alt={alt} />
        </div>
    )
}

export default Image_top