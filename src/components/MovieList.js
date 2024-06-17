import React from "react";
import MovieCard from "./MovieCard";
import "./custom.css"

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="text-white">
        <h1 className="font-bold p-3">{title}</h1>
        <div className=" flex overflow-x-scroll no-scrollbar p-2">
        {movies &&
          movies.map((movie) => (
            <MovieCard key={movie.id} movieImage={movie.poster_path} />
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default MovieList;
