import React from 'react'

const FeedBackItem = ({item}) => {
  return (
    <div className='card'>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.feedback}</div>
    </div>
  )
}

export default FeedBackItem