import React, { useState } from 'react';
import './App.css';
import './Moviecard';
import SearchIcon from"./assets/search.svg"
import { useEffect } from 'react'
import Moviecard from './Moviecard';


//api key http://www.omdbapi.com/?i=tt3896198&apikey=fe2c14ae
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=fe2c14ae'

const movie1 = {
  "Title": "Titanic II",
  "Year": "2010",
  "imdbID": "tt1640571",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxMjQ1MjA5Ml5BMl5BanBnXkFtZTcwNjIzNjg1Mw@@._V1_SX300.jpg"
}
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');



  const searchMovies = async (title) =>
  {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies(searchTerm);
}, []);
  return (
    <div className='app'>
      <h1>MoviesCorn</h1>

      <div className='search'>
        <input type="text" name="" id="" placeholder='search for movies' value={searchTerm}
          onChange={ (e)=>setsearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
              {movies.map((movie) => (
                <Moviecard movie1={movie} />
              ))}
            
            
          </div>
        ) : (
            <div className='empty'>
              <h2>Movie not found</h2>
            </div>
          )
      }


    </div>
  )
}

export default App
