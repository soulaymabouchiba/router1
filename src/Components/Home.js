import {useState} from 'react';
import {MovieList} from "./MovieList";
import {Filter} from "./Filter";
import { MovieData } from '../Data';
import {AddMovie} from "./AddMovie";

function Home() {
  const [movies, setMovies] = useState(MovieData);
  const [FilterTitel, setFilterTitel] = useState("");
  const [FilterRating, setFilterRating] = useState(0);

  return (
    <div className="App">
       <header className="App-header">
      <Filter  setFilterRating={setFilterRating}  FilterRataing={FilterRating} setFilterTitel={setFilterTitel} />
      <AddMovie setMovies={setMovies} movies={movies}/>    
      <MovieList FilterRating={FilterRating} FilterTitel={FilterTitel} movies={movies} />
      
      </header>
    </div>
  );
}

export default Home;