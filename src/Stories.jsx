import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Stories() {
  const navigate = useNavigate();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/stories`)
      .then(response => response.json())
      .then(data => setStories(data))
      .catch(error => console.log(error));
  }, []);

  const tot = stories.length;

  return (
    <div className='story d-flex'>
      {tot > 0 ? (
        stories.map((story) => (
          <div key={story.id} className='mx-1' onClick={() => navigate(`/stories/${story.id}/${tot}`)}>
            <div className="gradientborder">
              <img
                src={story.user?.profile_pic}
                alt="dp"
                className="story-dp rounded-circle"
              />
            </div>
            <p className="user text-truncate" style={{ width: "50px" }}>
              {story.user?.username}
            </p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Stories;
