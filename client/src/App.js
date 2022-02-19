import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import axios from "axios";
// import { FakeData } from "./FakeData/FakeData";

const App = () => {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/insertFeedback", { name, feedback, rating })
      .then((data) => {
        if (data) {
          alert("Feedback Inserted Successfully.");
          setFeedback("");
          setName("");
          setRating(0);
        }
      });
  };
  return (
    <>
      <Header />
      <div className="container">
        <div>
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
                required
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <button style={{ padding: "5px", cursor: "pointer" }} type="submit">
              Submit
            </button>
          </form>
        </div>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
