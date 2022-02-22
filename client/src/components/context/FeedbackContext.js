import axios from "axios";
import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [singleFeedback, setSingleFeedback] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [totalFeedback, setTotalFeedback] = useState([]);

  //get Total feedback
  useEffect(() => {
    axios
      .get("http://localhost:5000/getTotalFeedback")
      .then((result) => setTotalFeedback(result.data));
    if (!totalFeedback || totalFeedback.length === 0) {
      return <p>No feedback yet.</p>;
    }
  }, [totalFeedback]);

  //get single product for update
  const singleProductHandler = (id) => {
    axios
      .get(`http://localhost:5000/singleFeedback/${id}`)
      .then((data) => setSingleFeedback(data.data));

    setEditClick(true);
  };

  //delete handler
  const handleDelete = (id) => {
    if (window.confirm("Sure for delete feedback..?")) {
      axios.get(`http://localhost:5000/deleteFeedback/${id}`);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        totalFeedback,
        singleProductHandler,
        singleFeedback,
        editClick,
        setEditClick,
        handleDelete,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
