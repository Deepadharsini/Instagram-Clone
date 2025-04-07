import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestions() {
  const[profile,setProfile] =useState(null);
  const[suggestions,setSuggestions]=useState([]);
   useEffect(()=>{
      fetch('http://localhost:3000/profile')
      .then(response=> response.json())
      .then(data=>setProfile(data))
      .catch(error=>console.log(error));
      fetch('http://localhost:3000/suggestions')
      .then(response=> response.json())
      .then(data=>setSuggestions(data))
      .catch(error=>console.log(error));
   },[]);
   const handleFollow =async(id,username)=>{
      axios.post('http://localhost:3000/followers',{"id":id,"username":username})
      .then(alert(`You are following ${username}now!!`))
      .catch(err=>console.log(err));
    } 
  return (
    <div>
          <div className="suggestions w-75 m-4">
              { profile ?
                  <div className='d-flex'>
                          <img className=" dp rounded-circle" src={profile.profile_pic} alt="noProfile" ></img>
                          <h5>{profile.username}</h5>
                          <small className='ms-auto text-primary'>Switch</small>
                  </div>
              :<p>Loading...</p>
              }
          
          <div className='d-flex'>
                <p>Suggested for you</p>
                <b className='ms-auto'>See All</b>
          </div>
            {suggestions.length >0 ?
             (<div>
                  {suggestions.map((suggest)=>(
                    <div className='my-2' key ={suggest.id}> 
                      <div className='d-flex'>
                          <img className='dp rounded-circle' src={suggest.profile_pic} alt="noProfile"></img>
                          <h5>{suggest.username}</h5>
                          <button className='ms-auto btn btn-primary' onClick={()=>{handleFollow(suggest.id,suggest.username)}}>Follow</button>
                      </div>
                    </div>
                  ))}
             </div>)
            :(<div>Loading...</div>)}
          </div>
    </div>
  );
}
export default Suggestions