import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

const FeedbackForm = () => {
    const { singleFeedback, editClick, setEditClick } = useContext(FeedbackContext)
    const [feedback, setFeedback] = useState("");
    const [name, setName] = useState("");
    const [rating, setRating] = useState();

    useEffect( () => {
        setFeedback(singleFeedback[0]?.feedback)
        setName(singleFeedback[0]?.name)
        setRating(singleFeedback[0]?.rating)
    } ,[singleFeedback])

    const submitHandler = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3001/insertFeedback", { name, feedback, rating })

        setFeedback("");
        setName("");
        setRating("");
    };
    
    const updateHandler = (e) => {
      e.preventDefault();
      axios.put(`http://localhost:3001/updateFeedback/${singleFeedback[0]?.id}`, { name, feedback, rating }).then((result) => {
        if(result) {
          setEditClick(false)
        }
      })

      setFeedback("");
      setName("");
      setRating("");
    }

  return (
    <div className='p-5 d-flex justify-content-center'>
      <form onSubmit={editClick ? updateHandler : submitHandler}>
            <div>
              <input
                style={{ padding: "5px", margin: "15px" }}
                placeholder="Your name..."
                type="text"
                value={name || ""}
                required
                onChange={(e) => setName(e.target.value)}
                className="form-control "
              />
            </div>
            <div className="form-floating mx-3">
              <textarea
              placeholder="Type your feed back..."
              type="text"
              value={feedback || ""}
              required
              onChange={(e) => setFeedback(e.target.value)}
              className="form-control" 
              id="floatingTextarea2" style={{height: "100px"}}  />
              <label htmlFor="floatingTextarea2" className='text-dark'>Feedback: </label>
            </div>
            <div>
              <input
                style={{ padding: "5px", margin: "15px" }}
                type="number"
                value={rating || ""}
                placeholder="Your rating"
                required
                onChange={(e) => setRating(e.target.value)}
                className="form-control "

              />
            </div>

           <div className="text-center">
           <button className={`btn ${editClick ? 'btn-outline-success' : 'btn-outline-primary'} mx-3 w-75`} style={{ padding: "5px", cursor: "pointer" }} type="submit">
              {editClick ? "Update" : "Submit"}
            </button>
           </div>
          </form>
    </div>
  )
}

export default FeedbackForm