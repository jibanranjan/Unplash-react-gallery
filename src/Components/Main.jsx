import React from 'react'
import { useState,useEffect } from 'react'
import './Main.css'
export default function Main() {
const[state,setState]=useState([])
useEffect(()=>{
    fetch("https://api.unsplash.com/photos/?client_id=PFBmBJh3GaI741MkG0WpkEkYJmClg3ENZDFKHu_trAI")
    .then((res)=>res.json())
    .then((data)=>{
        
        setState(data)
        console.log(state)
        
    })
},[])






  return (
    <div className='output'>
     {
        state.map((ele)=>{
            return(
                <div className="imageContainer">

                    <div className='photo'>
                    <p>{ele.user.name}</p>
                    <p>{ele.created_at}</p>
                    <img src={ele.urls.regular} alt="" />
                    </div>
                    
                </div>
            )
            
        })
     }

    </div>
  )
}