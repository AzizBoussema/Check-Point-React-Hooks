import { useState } from 'react';
import './App.css';
// import tableau de film
import {moviesData} from './moviesData';
import MovieList from "./components/movieList/MovieList";
import AddMovie from './components/addMovie/AddMovie';
import FilterbyRate from './components/filterRate/FilterbyRate';
import FilterByTitle from './components/FilterTitle/FilterByTitle';


function App() {
// mettre data dans une state movies
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState ("");
  const [SearchRate, setSearchRate] = useState (1);

  const add_movie = (newMovie)=> {
    setMovies([...movies, newMovie]);
  }
  return (
    <div className="App">
      <h1>Movie App</h1>
        <AddMovie add_movie={add_movie}/>
       <FilterByTitle searchTitle = {searchTitle} setSearchTitle={setSearchTitle}/>
      <FilterbyRate SearchRate={SearchRate} setSearchRate={setSearchRate}/>
      <MovieList movies={movies} searchTitle={searchTitle} SearchRate={SearchRate}/>
    </div>
  );
}

export default App;