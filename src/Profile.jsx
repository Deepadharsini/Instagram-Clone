import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [unfollowed, setUnfollowed] = useState(false);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/profile`)
      .then(response => setProfile(response.data))
      .catch(err => console.log(err));

    axios.get(`${import.meta.env.VITE_API_URL}/followers`)
      .then(data => setFollowers(data.data))
      .catch(err => console.log(err));
  }, [unfollowed]);

  function handleonChange(e) {
    setProfile(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleUpdate = async () => {
    axios.put(`${import.meta.env.VITE_API_URL}/profile`, profile)
      .then(() => console.log("Updated"))
      .catch(error => console.log(error));
  }

  const handleUnfollow = async (id) => {
    axios.delete(`${import.meta.env.VITE_API_URL}/followers/${id}`)
      .then(() => {
        setUnfollowed(!unfollowed);
        alert(`You unfollowed now!!`);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      {profile ?
        (<div>
          <img src={profile.profile_pic} alt="noProfile" className="rounded-circle profile shadow-lg border border-dark border-3 p-1" />
          <h2 className="mt-auto mb-auto ms-4">{profile.username}</h2>
          <input type="text" value={profile.username} className="form-control my-4" name="username" placeholder="Username" onChange={handleonChange} />
          <input type="text" value={profile.profile_pic} name="profile_pic" className="form-control my-4" placeholder="Profile" onChange={handleonChange} />
          <button className="btn btn-primary my-4" onClick={handleUpdate}>Update</button>
        </div>) : (<p>loading...</p>)}

      {followers.length > 0 ?
        followers.map((follower) => (
          <div key={follower.id} className='d-flex w-75'>
            {follower.username}
            <button className='btn btn-secondary ms-auto my-2' onClick={() => handleUnfollow(follower.id)}>Unfollow</button>
          </div>
        ))
        : (<p>loading followers....</p>)}
    </div>
  );
}

export default Profile;
