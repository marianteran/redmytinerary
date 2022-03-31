import React from 'react'
import './home.css'
import {Link} from "react-router-dom"
import video from './image/headers.mp4' 

const HeroSection = () => {
    return (
        <div>

            <div className="heroContainer">
                <video className="mainVideo" src={video} autoPlay loop muted />
                <h1>Mytinerary</h1>
                <div>
                    <h3>Find your perfect trip,</h3>
                   
                </div>
                <div className="heroButtons">
                    <Link to="/cities">
                        <button>GET STARTED</button>
                    </Link>


                </div>
            </div>


        </div>
    )
}

export default HeroSection