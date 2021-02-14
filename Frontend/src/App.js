import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import MemeList from './components/MemeList';
import MemeService from './services/MemeService';

function App() {
  const initialState = {
    name: "",
    url: "",
    caption: ""
  };

  const [memes, setMemes] = useState([]);
  const [meme, setMeme] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    retrieveMemes();
  }, [meme]);

  const retrieveMemes = () => {
    MemeService.getAll()
      .then(response => {
        setMemes(response.data);
        setIsLoading(false);
        // console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Header />
      <div class="container-fluid header">
        <h1 class="mt-3 mb-5">Share a Smile by Sharing a Meme</h1>
      </div>
      <Form meme={meme} getMeme={(meme) => setMeme(meme)}/>
      <MemeList isLoading={isLoading} memes={memes}/>
      <Footer />
    </div>
  );
}

export default App;
