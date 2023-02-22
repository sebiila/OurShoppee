import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
 
  RiFacebookFill,
 
   RiTwitterFill ,
  RiTwitterLine ,
} from "react-icons/ri";
import {RxInstagramLogo} from "react-icons/rx"
import { MdEmail, MdMailOutline } from "react-icons/md";
export const Facebook = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const facebook = document.getElementById("facebook");
    facebook.addEventListener("click", () => {
      window.open("      https://www.facebook.com/ourshoppee/", "_blank");
    });
  }, []);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        id="facebook"
        rel="noopener noreferrer"
      >
        {isHovered ? <RiFacebookFill /> : <RiFacebookFill />}
      </div>
    </>
  );
};
export const Whatsapp = () => {
 
  const handleClick = () => {
    window.open("wa.me/97152-1740943", "_blank");
  };

  return (
    <>
    <p className="bold">WhatsApp:
      <a
      
        role= 'button'
        onClick={handleClick}
        rel="noopener noreferrer"
        className="text-decoration-none ps-2 medium"
        style={{color:"#ffffff"}}
      >
       (971)52 1740943
      </a></p>
    </>
  );
};

export const Instagram = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const instagram = document.getElementById("instagram");
    instagram.addEventListener("click", () => {
      window.open("      https://www.instagram.com/ourshoppee/", "_blank");
    });
  }, []);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        id="instagram"
      >
        {isHovered ? <RxInstagramLogo/> : <RxInstagramLogo/>}
      </div>
    </>
  );
};
export const Twitter = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const twitter = document.getElementById("twitter");
    twitter.addEventListener("click", () => {
      window.open(
        "      https://www.twitter.com/company/our-shoppee/",
        "_blank"
      );
    });
  }, []);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        id="twitter"
      >
        {isHovered ? <RiTwitterLine/> : <RiTwitterFill/>}
      </div>
    </>
  );
};
  
export const  Mail = () => {
 
  return (
    <div className="mail">
      <>
      <p className='bold' style={{color:"#ffffff"}}>
      E-mail :
        <a
          href="mailto:support@ourshopee.com"
          className="text-decoration-none ps-2 medium   "
          style={{color:"#ffffff"}}
        >  
           support@ourshopee.com
        </a></p>
      </>
    </div>
  );
};
export const CallButton = () => {
  
  
    return (
      <div className="call-button">
         <p className='bold'>
        Hotline :
         <a
           href="tel:(971) 4 2582959"
           className="text-decoration-none ps-2 medium"
          style={{color:"#ffffff"}}
         >
             (971) 4 2582959
         </a></p>
     </div>
    );
  }; 