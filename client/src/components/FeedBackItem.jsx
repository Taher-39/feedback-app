import axios from 'axios';
import React, { useState } from 'react'

const FeedBackItem = ({item}) => {
  const [singleFeedback, setSingleFeedback] = useState([])
  const handleDelete = (id) => {
    if(window.confirm("Sure for delete feedback..?")) {
      axios.get(`http://localhost:3001/deleteFeedback/${id}`)
    }
  }

  const handleUpdate = (id) => {
    axios.get(`http://localhost:3001/singleFeedback/${id}`).then(data => setSingleFeedback(data.data))
    console.log(singleFeedback[0]?.name);
  }

  return (
    <div className='card'>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.feedback}</div>
        
        <button style={{ padding: "5px", cursor: "pointer" }} onClick={() => handleDelete(item.id)}>Delete</button>
        <button style={{ padding: "5px",margin: "0 10px", cursor: "pointer" }} onClick={() => handleUpdate(item.id)}>Update</button>
    </div>
  )
}

export default FeedBackItem