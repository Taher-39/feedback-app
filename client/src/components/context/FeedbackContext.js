import axios from "axios";
import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [singleFeedback, setSingleFeedback] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [totalFeedback, setTotalFeedback] = useState([]);

  const [providerFeedback, setProviderFeedback] = useState({
    id: 1,
    name: "Rahim",
    feedback: "This feedback come from context",
    rating: 0,
  });

  //get Total feedback
  useEffect(() => {
    axios
      .get("http://localhost:3001/getTotalFeedback")
      .then((result) => setTotalFeedback(result.data));
    if (!totalFeedback || totalFeedback.length === 0) {
      return <p>No feedback yet.</p>;
    }
  }, [totalFeedback]);

  //get single product for update
  const handleUpdate = (id) => {
    axios
      .get(`http://localhost:3001/singleFeedback/${id}`)
      .then((data) => setSingleFeedback(data.data));

    setEditClick(true);
  };
  return (
    <FeedbackContext.Provider
      value={{
        providerFeedback,
        totalFeedback,
        handleUpdate,
        singleFeedback,
        editClick,
        setEditClick,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
