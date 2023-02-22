import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { AddtoCart } from '../components/buttons';
import  {Heading} from '../components/Heading';
import { hot_deals } from '../data/hot-deals';
import './home.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { heading } from '../data/heading';
function HotDeals() {
   
 
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
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween:5
      },
    },
  };

  return (

   
    <Container className=' '>
      <Row>
        <Col className='text-center py-2  '>
        
        {heading.map((text, index) => (
        <Heading className=" " key={index} text={text.heading2} />
      ))} 
    <Swiper {...params}>
      {hot_deals.map((item, index) => (
        <SwiperSlide key={index} className='  open-sans-font '>
         <div className="Hot-deals py-2">
          <img src={item.cover} alt={`Slide ${index}`} />
          <div className="offer-red   bold"><h4>{item.offer_time}</h4></div>
          <p className='    medium '>{item.name}</p>
        <h3 className='    extrabold'>{item.price}</h3>
        <AddtoCart/> </div>
        </SwiperSlide>
      ))}
    </Swiper>
        </Col>

      </Row>
       
    </Container>
   
  );
}

export default HotDeals;
