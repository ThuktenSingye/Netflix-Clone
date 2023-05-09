import React, { useEffect, useState } from 'react'
import './Nav.css'
import NetFlixIcon from '../asset/netflix.png'
import Avatar from '../asset/avatar.png'

function Nav() {
    const[show, handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    handleShow(true);
                } else {
                    handleShow(false);
                }
            });
        };        

    },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img 
        className='nav_logo'
        src={NetFlixIcon} 
        alt="Netflix logo" 
        />
        <img 
        className='nav_avatar'
        src={Avatar}
        alt="" />
    </div>
  )
}

export default Nav