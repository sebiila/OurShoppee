import React from 'react'
import NavBar from './components/Navbar'
import { banner } from './data/banner'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Heading } from './components/Heading';
import { heading } from './data/heading';
import ImageSlider from './home-elements/SubCategory';
import Banner from './home-elements/Banner';
import HotDeals from './home-elements/HotDeals';
import  DebitCardOffer  from "./home-elements/DebitCardOffer";
import  Links  from "./home-elements/Links";
import Footer from './components/footer/Footer';
import Stickybutton from './components/Stickybutton';
import Topbrands from './home-elements/Topbrands';
import MobilePhone from './home-elements/MobilePhone';
import './home-elements/home.css'
import Accessories from './home-elements/MobileAccessories';
import MobilePhotography from './home-elements/MobilePhotography';
export const HomeScreen = () => {
  return (
    < >
       <section className="home-screen">
       <NavBar/>
 
 <Banner/>
 
      <ImageSlider/>
      <HotDeals/>
      <Topbrands/>
      <MobilePhone/>
      <Accessories/>
      < MobilePhotography/>
      <DebitCardOffer/>
      <Links/>
      <Footer/>
      <Stickybutton/>
       </section>
    </ >
  )
}
