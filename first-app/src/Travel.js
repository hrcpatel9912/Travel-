import React from 'react';
import './Travel.css';
import spain from './image/spain.jpg';
import france from './image/france.jpg';

function Travel() {
     return(
        <div>
            <img src={spain} alt=''/>
            <div className='text'>
            <h1>Amazing Santorini 7 Days Tour</h1>
            <p className=''>A modern & beautiful theme for all travel & tourisum business. </p>
            <button className='But'>Book Now</button>
            <div className='abc'>
            <p classNmae='txt1'>spacial offer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adpisicing elit,<br></br>
                         sed do eiusmod tempor incididunt.</p>
            </div>
            
            <img src={france} alt=''/>
            
            </div>
        </div>
        
     )
}
export default Travel;