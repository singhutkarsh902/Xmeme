import React from 'react';
import image from '../images/loading.gif'

const Spinner = () => {
    return (
        <img src={image} style={{ width: "200px", margin: "auto", display: "block" }} alt="Loading..." />
    )
}

export default Spinner;