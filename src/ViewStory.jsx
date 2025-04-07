import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function ViewStory() {
  const { id, tot } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/stories/${id}`)
      .then((response) => response.json())
      .then((data) => setStory(data))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    if (Number(id) > Number(tot) || Number(id) < 1) {
      navigate('/');
    }
  }, [id, tot, navigate]);

  return (
    <div>
      {story ? (
        <div className="d-flex justify-content-center align-items-center">
          {Number(id) > 1 && (
            <Link to={`/stories/${Number(id) - 1}/${tot}`}>
              <i className="bi bi-arrow-left-circle-fill fs-1 mx-3"></i>
            </Link>
          )}

          <img className="vh-100" src={story.image} alt={`${story.user.username}'s story`} />

          {Number(id) < Number(tot) && (
            <Link to={`/stories/${Number(id) + 1}/${tot}`}>
              <i className="bi bi-arrow-right-circle-fill fs-1 mx-3"></i>
            </Link>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ViewStory;
