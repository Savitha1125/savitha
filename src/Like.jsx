import { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked); 
  };

  return (
    <div>
      <h2>{liked ? "You liked this!" : "You haven't liked this yet."}</h2>
      <button onClick={toggleLike}>
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default LikeButton;
