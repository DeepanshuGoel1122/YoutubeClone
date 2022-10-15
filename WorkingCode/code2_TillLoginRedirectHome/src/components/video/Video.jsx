import './_video.scss'
import { AiFillEye } from 'react-icons/ai'
import React from 'react'

const Video = () => {
  return (
    <div className='video'>

      <div className='video__top'>
      <img src="https://i.ytimg.com/vi/1D7HZw9RQ9M/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmNEuMh12wPWekEU-PLFPmvl6afA" alt="" />
      <span>05:40</span>

      </div>

      <div className='video__title'>
        App created using React Redux  Scss Youtube API Firebase Auth
      </div>

      <div className='video__details'>

        <span>
          <AiFillEye /> * 5M Views
        </span>

        <span>5 days ago</span>
      </div>

      <div className='video__channel'>

      <img src="https://yt3.ggpht.com/ytc/AMLnZu_aJA1a-K4fe7a9rvEc3bt_GPye2ER0Mo_Yzh2fGg=s88-c-k-c0x00ffffff-no-rj" alt="" />
      <p>Marvel Entertainment</p>
      </div>
    </div>
  
  )
}

export default Video