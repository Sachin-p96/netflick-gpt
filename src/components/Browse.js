import React from 'react'
import Header from './Header'

const Browse = () => {
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="browse"
        />
      </div>
    </div>
  )
}

export default Browse
