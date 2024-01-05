import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import './App.css';

type objectType = {
    link?: string,
    name?:string,
    
}
type Props = objectType[];

interface MyComponentProps {
    data: Props;
    bgcolor?:string;
    textColor?:string;
    textStroke?:string;
    closeButton?:string;
    closeActive?:string;
  }

const MoffBar = ({ data, bgcolor='black', textColor='white', textStroke='white', closeButton='black', closeActive='white' }: MyComponentProps) => {
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

 const handleClick = () => {
    setIsActive(!isActive);
    setIsOpen(!isOpen);
  };

  const customStyle={
    background: bgcolor
  }
 const customClose = {
  background: closeButton
 }
  const textStyle = {
    color: textColor,
    WebkitTextStroke:'1px' + ` ${textStroke}`,
  }
  const linkStyle = `.overlay ul li a:after{
    background: ${textStroke} !important;
  }
  .button_container.active .top {
    background: ${closeActive} !important;
  }
  .button_container.active .middle {
    background: ${closeActive} !important;
  }
  .button_container.active .bottom {
    background: ${closeActive} !important;
  }
  `;

    return (
        <div>
          <style>
          {linkStyle}
          </style>
           <div
          id="toggle"
          className={isActive ? "active button_container" : "button_container"}
          onClick={handleClick}
        >
          <span className="top" style={customClose}></span>
          <span className="middle" style={customClose}></span>
          <span className="bottom" style={customClose}></span>
        </div>
        <div
        id="overlay"
        className={
          isOpen
            ? "open overlay d-flex justify-content-start align-items-center flex-column"
            : "overlay d-flex justify-content-start align-items-center flex-column"
        }
        style={customStyle}
      >
         
        <nav className="overlay-menu text-start w-75"  style={customStyle}>
          <ul>
            {data.length>0?
                data.map((item,index)=>(
                    <li key={index}>
                    <Link to={`${item.link}`} onClick={handleClick} style={textStyle}>
                      {item.name}
                    </Link>
                  </li>
                )):
                <li>
                <Link to={`/`} onClick={handleClick}>
                  Home
                </Link>
              </li>
            }
          </ul>
        </nav>
      </div>
      <Outlet />
        </div>

    )
}

export default MoffBar