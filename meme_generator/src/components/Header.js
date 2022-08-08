import React from 'react';
import logo from'../troll-face.png'

export default function Header() {
    return(
        <div className='Head'>
            <img src={logo} className='heared-img'/>
            <h4 className='header-txt'>MemeGenetator</h4>
            <small className='small-txt'>React Course - project 3</small>
        </div>
    )
}