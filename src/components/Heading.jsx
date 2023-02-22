import React from 'react';
import './component.css'

 

 
 
 export const Heading = (props) => {
   return (
     <div><h2 className="heading py-2 py-lg-3 poppins-font semibold">{props.text}</h2></div>
   )
 }
 

 export const Title = (props) => {
    return (
      <div><h3 className="heading   open-sans-font  bold">{props.text}</h3></div>
    )
  }
  export const FooterTitle = (props) => {
    return (
      <div><h2 className="footer-head     bold">{props.text}</h2></div>
    )
  }