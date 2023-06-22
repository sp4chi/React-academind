import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsloading(true);
    setError(null);
    try {

      const response = await fetch('https://swapi.py4e.com/api/films/');

      if (!response.ok) {
        throw new Error(`Something went wrong. Error code ${response.status}`)
      }

      const data = await response.json();
      //console.log(response)



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
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  };

  let content = <p>Found no movies!</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (error) {
    content = <p>{error}</p>
  }
  if (isloading) {
    content = <p>Loading...</p>
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
