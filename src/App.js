import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'F9',
      description: 'Action',
      posterURL: 'https://img.hdtoday.tv/xxrz/250x400/394/d0/ec/d0ec7ef079bd599580f21ed88b81eff3/d0ec7ef079bd599580f21ed88b81eff3.jpg',
      rating: 4.5,
    },
    {
      title: 'The town',
      description: 'action crime',
      posterURL: 'https://img.hdtoday.tv/xxrz/250x400/394/e8/4a/e84a3d537e8f5df521e2511514bcd4af/e84a3d537e8f5df521e2511514bcd4af.jpg',
      rating: 3.8,
    },
    {
      title: 'Red 2',
      description: 'action crime',
      posterURL: 'https://img.hdtoday.tv/xxrz/250x400/394/29/10/291065ac228b242c863c56c4e9de70e7/291065ac228b242c863c56c4e9de70e7.jpg',
      rating: 1,
    },{
      title: 'The medallion',
      description: 'action crime',
      posterURL: 'https://img.hdtoday.tv/xxrz/250x400/394/45/23/452365f034f5ce3fdb81419d1bc49cdc/452365f034f5ce3fdb81419d1bc49cdc.jpg',
      rating: 4,
    },{
      title: 'The Equalizer 3',
      description: 'action crime',
      posterURL: 'https://img.hdtoday.tv/xxrz/250x400/394/7f/e1/7fe14f7bb66949aebdd0e4723d56a2a7/7fe14f7bb66949aebdd0e4723d56a2a7.jpg',
      rating: 2.9,
    },
    
  ]);

  const [filters, setFilters] = useState({
    title: '',
    rating: '',
  });

  const handleFilterChange = (type, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (filters.rating === '' || movie.rating >= parseFloat(filters.rating))
    );
  });

  const addMovie = newMovie => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({ title: 'New Movie', description: 'Description for New Movie', posterURL: 'url-to-poster', rating: 4.0 })}>
        Add New Movie
      </button>
    </div>
  );
};

export default App;
