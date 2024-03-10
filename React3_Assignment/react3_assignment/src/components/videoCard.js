import React, { useState, useEffect} from 'react';
import cardImg from '/Users/deeptisharma/WebDev/React3_Assignment/react3_assignment/src/utils/Poster.png'
import playBtn from '/Users/deeptisharma/WebDev/React3_Assignment/react3_assignment/src/utils/playBtn.png'
import likeBtn from '/Users/deeptisharma/WebDev/React3_Assignment/react3_assignment/src/utils/like.png'
import dislikeBtn from '/Users/deeptisharma/WebDev/React3_Assignment/react3_assignment/src/utils/dislike.png'
import dropdownBtn from '/Users/deeptisharma/WebDev/React3_Assignment/react3_assignment/src/utils/drop-down-menu.png'

import {toggleDescription} from '/Users/deeptisharma/WebDev/React3_Assignment/react3_assignment/src/utils/appSlice'
import { useDispatch, useSelector} from 'react-redux'

const VideoCard = () => {


    const isDescriptionVisible = useSelector((store) =>store.app.isDescriptionVisible);
    const dispatch = useDispatch();

    const toggleDescriptionHandler = () =>{
        dispatch(toggleDescription());
    }

    const [likeCount, setLikeCount] = useState(0);
    // const [displayAfterPress, setDisplay] = useState(false)

    // useEffect to monitor changes in likeCount
    useEffect(() => {
        // You can perform actions here when likeCount changes, if needed
        // console.log('Like count changed:', likeCount);
    
    },[likeCount]);
    
    const handleLikeClick = () =>{
        setLikeCount(likeCount+1);
    }
    const handleDislikeClick = () => {
        setLikeCount(likeCount-1);
    }


  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 m-4">
        {/* video thumb */}
        <img className="w-full h-40 object-cover object-center"
        src={cardImg}
        alt="video Thumbnail"
        />

        {/* Video Info */}
        <div className="px-4 py-2">
            <div className='flex'>
                <div className="font-bold text-xl mb-2 text-white">
                    <button><img className='w-7 mr-2 ' src={playBtn} alt="Play Button" /></button>
                </div>
                <button onClick={handleLikeClick}>
                    <img className='w-7 mb-4 mr-2 bg-white'
                        src={likeBtn} alt='like button'
                    />
                </button>
                <button onClick={handleDislikeClick}>
                <img className='w-7 mb-4 mr-20 bg-white' src={dislikeBtn} alt="Dislike Button" />
                </button>

                <button
                    onMouseEnter={toggleDescriptionHandler}
                    onMouseLeave={toggleDescriptionHandler}
                    onFocus={toggleDescriptionHandler}
                    onClick={toggleDescriptionHandler}
                >
                {/* <button className={`drop-down-btn w-4 transform transition-transform duration-300 ease-in-out ${displayAfterPress}`} onClick={displayContent}> */}
                    <img className='w-7 mb-4 ml-20 bg-white' src={dropdownBtn} alt="Dropdown"/>
                
                
                {/* floating description */}
                {isDescriptionVisible ? (
                    <div className="absolute bg-gray-700 text-white p-1 rounded-lg shadow-md top-150 left-6 z-10 text-sm">
                     <p>
                    Chandramukhi 2 is a 2023 Indian Tamil horror <br/>film written an directed by P. Vasu.
                </p>
                     </div>
                ) : null }
                </button>
                
            </div>
            {/* {displayAfterPress && (
                <p className={`absolute text-center rounded-lg top-50 left-3 bg-gray-600 ${displayAfterPress ? 'block' : 'hidden'}`}>
                    Chandramukhi 2 is a 2023 Indian Tamil horror <br/>film written an directed by P. Vasu.
                </p>
            )} */}

            <p className="text-gray-300">{likeCount} likes</p>
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
          {/* display like count */}
          
        </div>
      
    </div>
  )
}

export default VideoCard
