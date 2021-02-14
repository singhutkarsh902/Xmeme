import React from 'react';

function Meme({ meme }) {
    return (
        <>
        <div className="col-md-4 col-12">
            <div className="mx-auto card my-3">
                <img src={meme.url} className="card-img-top px-4 pt-3" alt="..." />
                <div className="card-body">
                    <h3 className="card-title"> {meme.caption} </h3>
                    <h5 className="card-role mb-2">by {meme.name} </h5>
                </div>
            </div>
        </div>
        </>
    );
}

export default Meme;