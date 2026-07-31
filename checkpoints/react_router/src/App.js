import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';
import './App.css';

/**
 * Main App Component configured with React Router v6
 */
function App() {
  const [movies, setMovies] = useState([
    {
      id: "1",
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=80",
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
      rating: 5
    },
    {
      id: "2",
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
      trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY",
      rating: 5
    },
    {
      id: "3",
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces famine and environmental collapse.",
      posterURL: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E",
      rating: 4
    },
    {
      id: "4",
      title: "Cyberpunk City",
      description: "A futuristic story following rebel cyber-detectives navigating a neon metropolis controlled by corrupt mega-corporations.",
      posterURL: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80",
      trailerURL: "https://www.youtube.com/embed/8X2kIfS6fb8",
      rating: 3
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleAddMovie = (newMovie) => {
    const movieWithId = {
      ...newMovie,
      id: String(Date.now())
    };
    setMovies([...movies, movieWithId]);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = movie.rating >= ratingFilter;
    return matchesTitle && matchesRating;
  });

  return (
    <Router>
      <div className="App min-vh-100 py-5">
        <Routes>
          {/* Main Home Route displaying filter and movie cards */}
          <Route
            path="/"
            element={
              <Container>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-3">
                  <div>
                    <h1 className="display-4 fw-bold text-white mb-1">🎬 Movie Library</h1>
                    <p className="lead text-light opacity-75 mb-0">Explore trailers, filter, and discover your favorite movies</p>
                  </div>

                  <AddMovie onAddMovie={handleAddMovie} />
                </div>

                <Filter
                  titleFilter={titleFilter}
                  ratingFilter={ratingFilter}
                  onTitleChange={setTitleFilter}
                  onRatingChange={setRatingFilter}
                />

                <MovieList movies={filteredMovies} />
              </Container>
            }
          />

          {/* Movie Description & Trailer Details Route */}
          <Route
            path="/movie/:id"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
