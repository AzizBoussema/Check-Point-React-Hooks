import MovieCard from '../movieCard/MovieCard'
import './movieList.css'

const MovieList = ({ movies, searchTitle, SearchRate}) => {
    return (
        <div className='listMovies'>
            {movies.filter((movie)=> movie.title.toUpperCase().includes(searchTitle.toUpperCase())
            && movie.rate >= SearchRate
            )

            .map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>))
            }
        </div>
    )
}
export default MovieList;