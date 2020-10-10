import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
  const [user, setUser] = useState(null);

  // get user on initial render
  useEffect(() => {
    // either make a user show route,
    // or make a route to get the user by the comment
    // 'api/users/:id' OR 'api/comments/:comment_id/user'

    axios
      .get(`/api/users/${comment.user_id}`)
      .then((res) => setUser(res.data))
      .catch(console.log);
  }, []);

  return (
    <div key={comment.id}>
      <Link to={`/users/${comment.user_id}`}>
        {user && user.name}
      </Link>
   
      <h5>{comment.comment}</h5>
      <p>rating:{comment.rating}</p>
    </div>
  );
};

export default Comments;