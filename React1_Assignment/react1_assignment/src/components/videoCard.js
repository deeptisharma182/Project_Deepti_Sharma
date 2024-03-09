import React from 'react'
import cardImage from '/Users/deeptisharma/WebDev/React1_Assignment/react1_assignment/src/utils/images/Poster.png'
import thumbsUpBtn from '/Users/deeptisharma/WebDev/React1_Assignment/react1_assignment/src/utils/images/thumbsUp.png'

const videoCard = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 m-4">
        {/* video thubnail */}
        <img
        className="w-full h-40 object-cover object-center"
            src={cardImage}
            alt="Video Thumbnail"
        />

        {/* Video Info */}
        <div className="px-4 py-2">
            <div className="font-bold text-xl w-8 mb-2 text-white"><img src={thumbsUpBtn}/></div>

            <div className='flex'>
            <p className=" mr-2 text-green-500">97% Match</p>
            <p className="text-gray-300 text-base">2h 35m</p>
            </div>
        </div>
        <div>
            <ol className='flex'>
                <li className="text-gray-300 text-base mr-2">Horror</li>
                <li className="text-gray-300 text-base mr-2">Adventure</li>
                <li className="text-gray-300 text-base">Mystery</li>
            </ol>
        </div>
      
    </div>
  )
}

export default videoCard
