import React from "react";
import { nav } from "../data/nav";
   import './component.css'
   import { BsCart3 } from "react-icons/bs";
   import { RiAccountCircleLine } from "react-icons/ri";
   import { Container, Row, Col, Button } from 'react-bootstrap';
  
function NavBar() {
  return (
    <>
    <div class="nav  ">
       {nav.map((val)=>(
    <div class="container  ">
      <Row className="d-flex py-2 flex-row justify-content-between">  
        <Col className="col-lg-2 col-6 my-auto">
      <a class="navbar-brand" href="#"><img src={val.logo} alt={val.alt} /></a></Col>
     
      
      <Col className="col-lg-5 my-auto hideforsmalldevices">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search  " aria-label="Search"/>
           
        </form></Col>
        
        <Col className="col-lg-4 col-6 my-auto">
        <div className="d-flex flex-row ">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           
           <li class="nav-item dropdown my-auto">
             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             العربية UAE
             </a>
             <ul class="dropdown-menu ">
               <li><a class="dropdown-item" href="#">UAE</a></li>
               <li><a class="dropdown-item" href="#">KSA</a></li>
               <li><hr class="dropdown-divider"/></li>
               <li><a class="dropdown-item" href="#">KUWAIT</a></li>
             </ul>
           </li>
         
         </ul>
        <div className="d-flex flex-row hideforsmalldevices">
        <RiAccountCircleLine className="my-auto me-2"/> <h5 className="my-auto medium">Sign In/ Sign Up </h5>  
        </div>
        <div className="my-auto ms-4 hideforsmalldevices"><BsCart3 /></div>
        </div>
       </Col>
       <Row className="col-lg-4 py-2 my-auto showforsmalldevices">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search  " aria-label="Search"/>
           
        </form></Row>
         </Row>
      </div>
    ))} 
  </div>
  <Container>
  <Row>
  <nav class="navbar navbar-expand-lg  "  >
 
  
  <div class="collapse navbar-collapse" id="navbarNav" >
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link bold" href="#">Category <span class="sr-only"> </span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link bold" href="#"> Perfume Fiesta </a>
      </li>
      <li class="nav-item">
        <a class="nav-link bold" href="#"> Back to School </a>
      </li>
      <li class="nav-item">
        <a class="nav-link bold" href="#">  Pre-Owned Products  </a>
      </li>
      <li class="nav-item">
        <a class="nav-link bold" href="#">  Saver Zone  </a>
      </li>
      <li class="nav-item">
        <a class="nav-link bold" href="#">   Deal of The Day  </a>
      </li>
    </ul>
  </div>
</nav>
  </Row></Container>
  </>
  );
}

export default NavBar;
