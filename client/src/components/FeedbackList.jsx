import React, { useEffect, useState } from 'react'
import FeedBackItem from './FeedBackItem'
import axios from 'axios';

const FeedbackList = () => {
  const [totalFeedback, setTotalFeedback] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:3001/getTotalFeedback").then(result => setTotalFeedback(result.data))
    if(!totalFeedback || totalFeedback.length === 0) {
        return <p>No feedback yet.</p>
    }
  }, [totalFeedback])
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