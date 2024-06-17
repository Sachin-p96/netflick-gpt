import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );
  console.log(nowPlayingMovies, "playing");
  return (
    <div className="bg-black">
      <div className="-mt-48 relative z-40">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Trending"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={nowPlayingMovies} />
        <MovieList title={"Look Fine"} movies={nowPlayingMovies} />
        <MovieList title={"New Release"} movies={nowPlayingMovies} />
        <MovieList title={"Horror"} movies={nowPlayingMovies} />
        <MovieList title={"Documentary"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
