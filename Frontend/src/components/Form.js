import React, { useState } from 'react';
import MemeService from '../services/MemeService';

function Form({meme, getMeme}) {
    const initialState = {
        name: "",
        url: "",
        caption: ""
    };
    
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        getMeme({ ...meme, [name]: value });
    };

    const saveMeme = () => {
        var data = {
            name: meme.name,
            url: meme.url,
            caption: meme.caption
        };

        MemeService.create(data)
            .then(response => {
                getMeme({
                    id: response.data.id,
                    name: response.data.name,
                    url: response.data.url,
                    caption: response.data.caption
                });
                setSubmitted(true);
                // console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const newMeme = () => {
        getMeme(initialState);
        setSubmitted(false);
    };

    return (
        <>
            <div className="submit-form container">
                {submitted ? (
                    <div>
                        <h4>Wish to add another Meme?</h4>
                        <button className="btn btn-success" onClick={newMeme}>
                            Add
                        </button>
                    </div>
                ) 
                : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={meme.name}
                                onChange={handleInputChange}
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="url">Link to the Meme Image</label>
                            <input
                                type="text"
                                className="form-control"
                                id="url"
                                required
                                value={meme.url}
                                onChange={handleInputChange}
                                name="url"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="caption">Caption</label>
                            <input
                                type="text"
                                className="form-control"
                                id="caption"
                                required
                                value={meme.caption}
                                onChange={handleInputChange}
                                name="caption"
                            />
                        </div>

                        <button onClick={saveMeme} className="btn btn-success">
                            Submit
                        </button>
                        </div>
                    )}
            </div>
        </>
    );
}

export default Form;