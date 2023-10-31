import React from 'react'
import './timeline.css'
import Sidenavpart from './Sidenavpart'
import Post from './posts/Post'
import Botoomnav from './Botoomnav'

const Timeline = () => {
  return (
<div className='timeline-warper'>
    <div className='timeline'>
 
      <div className='timeline-left'>
        <div className='timeline-posts'>
                 <Post/>
        </div>
      </div>
      <div className='timeline-right'>
        <Sidenavpart/>
        </div>
     
    </div>
    </div>
  )
}

export default Timeline

