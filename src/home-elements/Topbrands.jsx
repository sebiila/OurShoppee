import React from 'react'
import { top_brand } from '../data/top-brand'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import './home.css'
import  {Heading} from '../components/Heading';
import './home.css'
import { Container, Row, Col,   } from 'react-bootstrap';
import { heading } from '../data/heading';
const Topbrands = () => {
    const params = {
        loop: true,
        slidesPerView: 1.5,
        breakpoints: {
          320: {
            slidesPerView: 2.2,
          },
          480: {
            slidesPerView: 2.2,
          },
          567: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        },
      };
      
      
      return (
        <Container className=' '>
          <Row>
            <Col className='text-center py-2 py-lg-4'>
              {heading.map((text, index) => (
                <Heading className=" " key={index} text={text.heading3} />
              ))}
              <div className='d-none d-lg-block'>
                <Row>
                  {top_brand.map((item, index) => (
                    < div key={index} className='col-lg-1 mb-4 mx-lg-4'>
                      <div className="box p-2    ">
                        <img src={item.src} alt={`Slide ${index}`} />
                         
                      </div>
                    </div >
                  ))}
                </Row>
              </div>
              <div className='d-block d-lg-none'>
                <Swiper {...params}>
                  {top_brand.map((item, index) => (
                    <SwiperSlide key={index} className='top-brands   '>
                      <div className="box p-2 px-2 ">
                        <img src={item.src} alt={`Slide ${index}`} />

                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      );
      
      
}

export default Topbrands