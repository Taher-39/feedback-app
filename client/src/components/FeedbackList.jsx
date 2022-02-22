import React, { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'
import FeedBackItem from './FeedBackItem'

const FeedbackList = () => {
  const { totalFeedback } = useContext(FeedbackContext)
  return (
    <div className='row' style={{marginLeft: "30px"}}>
        {
            totalFeedback.map((item) => (
                <FeedBackItem key={item.id} item={item} />
            ))
        }
    </div>
  )
}

export default FeedbackList