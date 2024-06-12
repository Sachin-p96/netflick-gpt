import React, { useEffect } from 'react'
import Header from './Header'
import { API_options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useNowPlaying()
  return (
    <div>
      <Header />
      <div className="absolute w-full text-xl">
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  )
}

export default Browse
