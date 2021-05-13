import React, { useState } from 'react';
import './DayNight.css'
import Day from './Day';
import Night from './Night';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const DayNight = () => {

   const[cbackground, setcbackground] = useState('false');



    return (
        
        <>
        <div className='main'>
        <nav>
            <button onClick={() =>{
                setcbackground(!cbackground)
            }}>{cbackground ? <Brightness4Icon /> : <Brightness7Icon />}</button>
        </nav>
         {cbackground ? <Day /> : <Night />}
         
        </div>
        </>
    )
}

export default DayNight
