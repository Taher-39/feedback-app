import React, { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'
import FeedBackItem from './FeedBackItem'

const FeedbackList = () => {
  const { totalFeedback } = useContext(FeedbackContext)
  
  return (
    <div className='feedback-list'>
        {
            totalFeedback.map((item) => (
                <FeedBackItem key={item.id} item={item} />
            ))
        }
    </div>
  )
}

export default FeedbackList