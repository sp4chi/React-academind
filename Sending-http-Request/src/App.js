import React, { useState, useEffect, useCallback } from 'react';
import AddMovie from './components/AddMovie'
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);


  const fetchMoviesHandler = useCallback(async () => {
    setIsloading(true);
    setError(null);
    try {

      const response = await fetch('https://react-http-sending-post-default-rtdb.asia-southeast1.firebasedatabase.app/mymovies.json');

      if (!response.ok) {
        throw new Error(`Something went wrong. Error code ${response.status}`)
      }

      const data = await response.json();
      //console.log(data)

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        })
      }

      //TRANSFORMING OUR GET REQUEST DATA
      // const transformedMovies = data.map(movie => {
      //   return {
      //     id: movie.episode_id,
      //     title: movie.title,
      //     openingText: movie.opening_crawl,
      //     releaseDate: movie.release_date
      //   }
      // });

      setMovies(loadedMovies);
      setIsloading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

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

  const addMovieHandler = async (movie) => {
    //console.log(movie)
    const response = await fetch('https://react-http-sending-post-default-rtdb.asia-southeast1.firebasedatabase.app/mymovies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
