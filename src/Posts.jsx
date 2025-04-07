import React, { useEffect, useState } from 'react'

function Posts() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error =>console.log(error));
    },[]);
  return (
    <div className="d-flex justify-content-center">
        {posts.length>0 ? 
        (<div>
            {posts.map((post)=>(
                <div key={post.id}>
                    <div className='d-flex'>
                         <img src={post.user.profile_pic}alt="noProfile" className=" dp rounded-circle"></img>
                         <h6>{post.user.username}</h6>
                  </div>
                  <img className ="image" src={post.image} alt="noImage"></img>
                  <div> 
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-chat"></i>
                  <i className="bi bi-send"></i>
                  </div>
                  <div>
                    <b>{post.likes}</b>
                  </div>
                  <p>{post.caption}</p>
               </div>
            ))}
        </div>) :
        (<div>Loading Posts</div>)}
    </div>
  )
}

export default Posts