import React from 'react'
import './timeline.css'
import Sidenavpart from './Sidenavpart'
import Post from './posts/Post'

const Timeline = () => {
  return (
    <div className='timeline'>
  {/* <Post/> */}
      <div className='timeline-left'>
        <div className='timeline-posts'>
                 <Post/>
        </div>
      </div>
      <div className='timeline-right'>
        <Sidenavpart/>
      </div>
    </div>
  )
}

export default Timeline

