import { useState } from "react";
import "../components/data.css";


function Showrecipe({ food }) {
  const [userName, setUserName] = useState("");
  const [userComment, setUserComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleCommentSubmit = () => {
    // Add the user's name and comment to the comments array
    const newComment = {
      name: userName,
      comment: userComment,
    };

    setComments((prevComments) => [...prevComments, newComment]);

    
    setUserName("");
    setUserComment("");
  };
  return (
    <div className="details">
      <h2>{food.name}</h2>
      <img className="images" src={food.image} alt={food.name} />
      <p>{food.about}</p>
      <p>{food.nutritionalvalue}</p>
      <p>{food.recipe}</p>
      <h6>{food.location}</h6>
      
       <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      
      <textarea
        placeholder="Write a comment..."
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
      />

      
      <button onClick={handleCommentSubmit}>Submit Comment</button>

      
      <div className="comments">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>
              <strong>{comment.name}:</strong> {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showrecipe;
