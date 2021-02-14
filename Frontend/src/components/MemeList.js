import React, { useState, useEffect } from 'react';
import Meme from "./Meme";
import Spinner from './Spinner.js';

function MemeList(props) {
    
    // const [currentMeme, setCurrentMeme] = useState(null);
    // const [currentIndex, setCurrentIndex] = useState(-1);
    
    const isLoading = props.isLoading;
    const memes = props.memes;

    // const refreshList = () => {
    //     setIsLoading(true);
    //     retrieveMemes();
    //     setCurrentMeme(null);
    //     setCurrentIndex(-1);
    // };

    // const setActiveMeme = (meme, index) => {
    //     setCurrentMeme(meme);
    //     setCurrentIndex(index);
    // };

    if (isLoading) return (
        <Spinner />
    )
    else return (
        <div className="container my-auto">
            <div class="row my-5">
            {memes.map((meme) => (
                <Meme key={meme.id} meme={meme}></Meme>
            ))}
            </div>
        </div>
    )   
}

export default MemeList;