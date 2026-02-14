import MovieCard from "../components/MovieCard";
import {useState} from "react";


function Home() {
      const [searchQuery, setSearchQuery] = useState("");
  
    const movies = [
        { id: 1, title: "Inception", release_date: "2010-07-16" },
        { id: 2, title: "The Matrix", release_date: "1999-03-31" },
        { id: 3, title: "Interstellar", release_date: "2014-11-07" }
    ];

  const handleSearch = () => {
    //e.preventDefault() // Prevent form submission or page reload or any default behavior
    alert(searchQuery)
    setSearchQuery("--------"); // Clear the search input after searching
  }
  
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="seaerch-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) => (
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
          )
        )}
      </div>
    </div>
  );
}

export default Home;