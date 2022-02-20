import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
};

export default App;
