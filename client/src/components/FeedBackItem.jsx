import axios from 'axios';
import React, { useState } from 'react'
import { useContext } from 'react';
import FeedbackContext from "./context/FeedbackContext"

const FeedBackItem = ({item}) => {
  const { handleUpdate } = useContext(FeedbackContext)
  const handleDelete = (id) => {
    if(window.confirm("Sure for delete feedback..?")) {
      axios.get(`http://localhost:3001/deleteFeedback/${id}`)
    }
  }

  return (
    <div className='card'>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">Name: {item.name}</div>
        <div className="text-display">Feedback: {item.feedback}</div>
        
        <button style={{ padding: "5px", cursor: "pointer" }} onClick={() => handleDelete(item.id)}>Delete</button>
        <button style={{ padding: "5px",margin: "0 10px", cursor: "pointer" }} onClick={() => handleUpdate(item.id)}>Update</button>
    </div>
  )
}

export default FeedBackItem