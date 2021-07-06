import React from "react";

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

import './InfoBar.css'

export default function InfoBar( {room}) {
  return (
    <div className='infoBar'>
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="online" className='onlineIcon'/>
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
    )

}