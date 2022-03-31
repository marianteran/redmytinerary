import React from 'react'
import CardCity from './CardCity'

const Cities = () => {
  return (
   
    <div>
  
             <div className="inputContainer">
                <h2>FIND YOUR NEW ADVENTURE!</h2>
                <input type= "text" className="inputFilter" placeholder="Search your destination..."  /> 
             </div>

            <CardCity/>
           
        </div>
  
  )
}

export default Cities