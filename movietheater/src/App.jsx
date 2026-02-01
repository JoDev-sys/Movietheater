import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber = 2;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Joe's adventure", release_date: "2024-01-01" }} />
      ) : (
          <MovieCard movie={{ title: "Timmys tree house", release_date: "2022-01-01" }} />
      )}
    </>
  );
}

export default App;
