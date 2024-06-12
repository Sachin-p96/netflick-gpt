import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className=' w-screen aspect-video p-3 py-[22%] absolute text-white bg-gradient-to-r from-black'>
      <div className='text-3xl font-mono font-bold'>{title}</div>
      <p className='w-1/2'>{description}</p>
    </div>
  )
}

export default VideoTitle

