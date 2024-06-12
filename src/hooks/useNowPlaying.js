import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_options } from "../utils/constants";

const useNowPlaying = () =>{
    const dispatch = useDispatch();
  const getMovies = async() => {
    const data = await  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', API_options)
    const movieData = await data.json()
    dispatch(addNowPlayingMovies(movieData.results))
  }

  useEffect(()=>{
    getMovies()
  },[])
}

export default useNowPlaying;