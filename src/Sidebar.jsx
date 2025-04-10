import React from 'react'
import { useNavigate } from 'react-router-dom'
function Sidebar() {
    const navigate = useNavigate();
  return (
    <div className='m-3 position-fixed'>
    <div className='d-flex flex-column gap-3'>
        <img  className ="logo-text" src="data/assets/instagram.png" alt=""/>
        <div><i className="bi bi-house"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>   
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-collection-play"></i>Reels</div>
        <div><i className="bi bi-chat-dots"></i>Messages</div>
        <div><i className="bi bi-heart"></i>Notifications</div>
        <div><i className="bi bi-plus-square"></i>Create</div>
        <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    <div className='d-flex flex-column gap-3 position-fixed bottom-0 mb-3'>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div ><i className="bi bi-list"></i>More</div>
    </div>
    </div>
    
  )
}

export default Sidebar