import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log('Movies: ', movies)
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
      </div>
      <div className="movie-container">
        {movies.Response === "True" ? (
          movies.Search.map((movie, index) => {
            <MovieCard key={index} data={movie} />;
          })
        ) : (
          <div className="movies-error">
            <h3>{movies.Error}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
