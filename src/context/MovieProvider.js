import { createContext, useContext, useEffect, useState } from "react"
import { moviesData } from "../moviesData"


const MovieContext = createContext()

const MovieProvider = ({ children }) => {
    const moviesStorage = () => {
        const moviesSaved = localStorage.getItem("movies")
        return moviesSaved? JSON.parse(moviesSaved): moviesData;
    };
 
    const [movies, setMovies] = useState(moviesStorage());
    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
    } [movies]);

    const [movies, setMovies] = useState(moviesData)

    return ()

        <MovieContext.Provider value={{movies, setMovies}}> 
        {Children}
        </MovieContext.Provider>
    );
};