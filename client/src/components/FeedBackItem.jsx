import { useContext } from 'react';
import FeedbackContext from "./context/FeedbackContext"

const FeedBackItem = ({item}) => {
  const { singleProductHandler, handleDelete } = useContext(FeedbackContext)
  return (
    <div className='bg-dark border col-md-6 d-flex m-1 p-3' style={{width: "300px"}}>
        <div>
          <p className="num-display">Rating: {item.rating}</p>
          <p className="text-display">Name: {item.name}</p>
          <p className="text-display">Feedback: {item.feedback}</p>
          
          <button className='btn btn-outline-danger' style={{ padding: "5px", cursor: "pointer" }} onClick={() => handleDelete(item.id)}>Delete</button>
          <button className='btn btn-outline-success' style={{ padding: "5px",margin: "0 10px", cursor: "pointer" }} onClick={() => singleProductHandler(item.id)}>Update</button>
        </div>
    </div>
  )
}

export default FeedBackItem