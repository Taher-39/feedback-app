import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { FakeData } from "./FakeData/FakeData";

const App = () => {
  const [feedback, setFeedback] = useState(FakeData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
