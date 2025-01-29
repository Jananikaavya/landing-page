import React from 'react'
import './Campus.css'
import gallery_1 from'./gallery-1.png'
import gallery_2 from'./gallery-2.png'
import gallery_3 from'./gallery-3.png'
import gallery_4 from'./gallery-4.png'

const campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt=""/>
            <img src={gallery_2} alt=""/>
            <img src={gallery_3} alt=""/>
            <img src={gallery_4} alt=""/>
            
        </div>
        <button className='btn dark-btn'>See more here</button>

    </div>
  )
}

export default campus