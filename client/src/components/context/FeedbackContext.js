import axios from "axios";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [singleFeedback, setSingleFeedback] = useState([]);

  const [providerFeedback, setProviderFeedback] = useState({
    id: 1,
    name: "Rahim",
    feedback: "This feedback come from context",
    rating: 10,
  });

  const handleUpdate = (id) => {
    axios
      .get(`http://localhost:3001/singleFeedback/${id}`)
      .then((data) => setSingleFeedback(data.data));
  };
  return (
    <FeedbackContext.Provider
      value={{ providerFeedback, handleUpdate, singleFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
