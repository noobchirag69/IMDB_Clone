import { useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const apiURL = 'https://www.omdbapi.com?apikey=c007e4b7';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${apiURL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input type="text" placeholder="Search for Movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)} />
            </div>

            {
                movies.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => {
                                return <MovieCard movie={movie} />
                            })}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;