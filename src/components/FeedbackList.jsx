import React from 'react'
import FeedBackItem from './FeedBackItem'

const FeedbackList = ({feedback}) => {
    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet.</p>
    }
  return (
    <div className='feedback-list'>
        {
            feedback.map((item) => (
                <FeedBackItem item={item} />
            ))
        }
    </div>
  )
}

export default FeedbackList