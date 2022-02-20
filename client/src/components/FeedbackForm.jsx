import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

const FeedbackForm = () => {
    const { singleFeedback } = useContext(FeedbackContext)
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
        setRating();
    };
  return (
    <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="feedback">Name: </label>
              <input
                style={{ padding: "5px", margin: "15px" }}
                placeholder="Your name..."
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="feedback">Feedback: </label>
              <input
                style={{ padding: "5px", margin: "15px" }}
                placeholder="Type your feed back..."
                type="text"
                value={feedback}
                required
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="Rating">Rating: </label>
              <input
                style={{ padding: "5px", margin: "15px" }}
                type="number"
                value={rating}
                placeholder="10/9"
                required
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <button style={{ padding: "5px", cursor: "pointer" }} type="submit">
              Submit
            </button>
          </form>
  )
}

export default FeedbackForm