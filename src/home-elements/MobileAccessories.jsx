import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import {mobile_title } from '../data/heading'
import {mobile_accessories } from '../data/mobile'
import './home.css'

const Accessories = () => {
    const params = {
        loop: true,
        
        slidesPerView: 4,
        spaceBetween:5,
        breakpoints: {
          0:{slidesPerView: 1.5,},
            320:{slidesPerView: 2,
               },
          480: {
            slidesPerView: 2,
          },
          567: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween:5
          },
        },
      };
      return (
       <section >
        <Container className="mobile p-4">
    <Row className='d-flex flex-row justify-content-between'>
        <Col className='col-10'> 
    {mobile_title.map((item)=>
    (
        <h3 className="bold">{item.title2}       </h3>
       
    ))} </Col>  
    
     
     </Row>
     <Row> 
      <Swiper {...params}>
      {mobile_accessories.map((item, index) => (
            <SwiperSlide key={index} className='  open-sans-font '>
              <div className="card p-2">
            <img src={item.cover} alt="" />
            <p className="medium">{item.name}</p>
            <div className="d-flex">
        <h4>{item.price_new}</h4>
       <p className='cross ps-2'>{item.price_old}</p>
      </div>
      <div className="offer-red offerbuuton"><span className='my-auto'>{item.offer}</span></div>
     
        </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </Row>
        </Container>
       </section>
      )
    }
export default  Accessories