import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsloading(true);
    const response = await fetch('https://swapi.py4e.com/api/films');

    const data = await response.json();
    //console.log(data)

    const transformedMovies = data.results.map(movie => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date
      }
    });

    setMovies(transformedMovies);
    setIsloading(false);
  };


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isloading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isloading && movies.length === 0 && <p>Found no movies!</p>}
        {isloading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
