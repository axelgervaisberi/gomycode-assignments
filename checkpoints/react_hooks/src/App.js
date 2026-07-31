import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

/**
 * Main App Component using React Hooks (useState)
 */
function App() {
  // Initial movie list state
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=80",
      rating: 5
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
      rating: 5
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces famine and environmental collapse.",
      posterURL: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
      rating: 4
    },
    {
      title: "Cyberpunk City",
      description: "A futuristic story following rebel cyber-detectives navigating a neon metropolis controlled by corrupt mega-corporations.",
      posterURL: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80",
      rating: 3
    }
  ]);

  // Filter state hooks
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  // Add new movie handler
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filter logic: matches title (case insensitive) and minimum rating
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = movie.rating >= ratingFilter;
    return matchesTitle && matchesRating;
  });

  return (
    <div className="App min-vh-100 py-5">
      <Container>
        {/* App Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-3">
          <div>
            <h1 className="display-4 fw-bold text-white mb-1">🎬 Movie Library</h1>
            <p className="lead text-light opacity-75 mb-0">Discover, filter, and add your favorite movies</p>
          </div>

          {/* Add Movie Modal Trigger */}
          <AddMovie onAddMovie={handleAddMovie} />
        </div>

        {/* Filter Component */}
        <Filter
          titleFilter={titleFilter}
          ratingFilter={ratingFilter}
          onTitleChange={setTitleFilter}
          onRatingChange={setRatingFilter}
        />

        {/* Movie List Grid Component */}
        <MovieList movies={filteredMovies} />
      </Container>
    </div>
  );
}

export default App;
