import React from 'react';

const Image_cover = ({title, image, price}) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title}/>
            <p>{price}</p>
        </div>
    )
}

export default Image_cover