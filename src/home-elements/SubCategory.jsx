import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { sub_category } from '../data/sub_category';
import './home.css'
import  {Heading} from '../components/Heading';
import './home.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { heading } from '../data/heading';
function ImageSlider() {
   

  const params = {
    loop: true,
    
    slidesPerView: 7,
    breakpoints: {
      0:{slidesPerView: 1.5,},
        320:{slidesPerView: 2.2,
           },
      480: {
        slidesPerView: 2.2,
      },
      567: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween:5
      },
    },
  };

  return (
    <Container className=' '>
      <Row>
        <Col className='text-center py-2 pt-lg-4'>
         
        {heading.map((text, index) => (
        <Heading className=" " key={index} text={text.heading1} />
      ))} 
    <Swiper {...params}>
      {sub_category.map((item, index) => (
        <SwiperSlide key={index} className='sub-category'>
          <img src={item.image} alt={`Slide ${index}`} />
          <p className='poppins-font py-lg-3 py-sm-2 py-0 semibold'>{item.text}</p>
        </SwiperSlide>
      ))}
    </Swiper></Col>

</Row>
 
</Container>

  );
}

export default ImageSlider;
