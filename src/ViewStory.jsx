import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
function ViewStory() {
    const {id,tot} =useParams();
    const[story,setStory]=useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
      fetch(`${import.meta.env.VITE_API_URL}/stories/${id}`)
        .then(response=>response.json())
        .then(data =>setStory(data))
        .catch(error=>console.log(error))
    },[id]);
    if(id>tot || id<0){
        navigate('/');
    }
  return (
    <div>
        {story ? (
           <div className='d-flex justify-content-center align-items-center'> 
          <Link to={`/stories/${Number(id) - 1}/${tot}`}>
  <i className="bi bi-arrow-left-circle-fill"></i>
</Link>

           <img className="vh-100" src={story.image} alt="noImage"></img>
           <Link to={`/stories/${Number(id) + 1}/${tot}`}>
  <i className="bi bi-arrow-right-circle-fill"></i>
</Link>
           </div>
        ) :(<p>loading...</p>)}
    </div>
  )
}

export default ViewStory