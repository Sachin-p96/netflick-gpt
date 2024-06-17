import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCard = ({movieImage}) => {
  return (
    <div className='mr-2'>
      <img className ='max-w-40'src = {IMAGE_CDN + movieImage} />
    </div>
  )
}

export default MovieCard
