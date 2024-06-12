import React, { useEffect } from "react";
import { API_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtrailerKey } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
    const trailerKey = useSelector(store => store.movie?.trailerKey)
    const dispatch =useDispatch();
  const getVideo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/653346/videos?language=en-US",
      API_options
    );
    const videoData = await response.json();
    console.log(videoData, "hoi");
    const filterData = videoData.results.filter(
      (video) => video.type === "Trailer"
    );
    console.log("Hahahaahahah", filterData);
    const mainMovieBackgroundKey = filterData[0].key;
    dispatch(addtrailerKey(mainMovieBackgroundKey))

  };
  useEffect(() => {
    getVideo();
  }, []);
  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?si=_x0Vqj_xOaOcyMTX&autoplay=1&mute=1`}
        title="YouTube video player"
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
