 import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { footer, footer_images, footer_links } from '../../data/footer'
import { footer_title } from '../../data/heading'
import {   FooterTitle, Heading  } from '../Heading'
import {   CallButton, Facebook, Instagram, Mail, Twitter, Whatsapp } from '../Social'
import { RiSendPlaneFill } from "react-icons/ri";
 import "./footer.css"
import { Link } from 'react-router-dom'
 const Footer = () => {
   return (
     <>
     <section className="footer hideforsmalldevices">
        <Container className='py-5'>
     {footer.map((item)=>(
        <>
     
<Row>
{footer_images.map((val)=>(
    <>
    <Col className='col-lg-4 col-12 col-md-6'>
  <img src={val.logo} alt={val.alt} />
  <p className="medium"> {item.desc}</p>
    <img src={val.badge} alt="" />
    { footer_title.map((text, index) => (
        <FooterTitle className=" " key={index} text={text.title1} />
      ))}     
      <div className="d-flex gap-4" style={{fontSize:"20px"}}>
    <Facebook/>
   <Instagram/>
 <Twitter/>
      </div>
      
    </Col>   
    <Col className='col-lg-5 col-12 col-md-6'>
    { footer_title.map((text, index) => (
        <FooterTitle className=" " key={index} text={text.title2} />
      ))} 
       <p className="medium"> {item.desc2}</p>
       { footer_title.map((text, index) => (
        <FooterTitle className=" " key={index} text={text.title3} />
        
      ))} <p className="medium"> {item.desc3}</p>
      <CallButton/>
      <Whatsapp/>
     <Mail/>
    </Col>
    <Col className='col-lg-3 col-12 col-md-6  '>
    { footer_title.map((text, index) => (
        <FooterTitle className=" " key={index} text={text.title4} />
      ))} 
      <div class="search-container ">
  <input type="text" placeholder={item.news}/>
  <button type="submit"><i style={{fontSize:"24px"}} ><RiSendPlaneFill/></i></button>
</div>
<div className="py-5">
{ footer_title.map((text, index) => (
        <FooterTitle className=" " key={index} text={text.title5} />
      ))} 
      <div className="d-flex gap-3"> 
       <img src={val.play} alt="" />
        <img src={val.apple} alt="" />
      </div>
      </div>
    </Col>
    </>
   ))}
</Row>
<hr className="styled-line"/> 

<Row className=' '>
  <Col className='col-12 d-flex flex-row justify-content-between'>
  {footer_links.map((val)=>(
        <a className="medium text-decoration-none " href={val.linkto} style={{color:"#ffffff"}} >{val.link} |</a>))}
        </Col>
</Row>  
<Row className='pt-5'>
    <Col className='col-12 d-flex flex-row justify-content-between'>
    <div >
    {footer_images.map((val)=>(
<img src={val.card} alt="" />
    ))}
    </div>
    <div><p style={{color:" rgba(255, 255, 255, 0.6) "}}>{item.copyight}</p></div></Col>
</Row>
</>
    ))}</Container>
     </section>
     
     
     </>
   )
 }
 
 export default Footer