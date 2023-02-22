import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { debit } from '../data/debit-card'
import './home.css'
const DebitCardOffer = () => {
  return (
    <section className='debit ' fluid>
   <Container className=' py-3'>
    <Row  className=' p-3  '>
    {debit.map((item, index) => (
        <Col className='text-center   col-lg-3 col-sm-4 col-6'>
<div className="debit-card  mb-3  p-3 ">
  <img src={item.cover} alt={item.alt} />
  <div className="interest my-2 px-1"><span className='my-auto p-1'>{item.p}</span></div>
  <p>{item.name}</p>
  <div className="d-flex">
    <h4>{item.price_new}</h4>
   <p className='cross ps-2'>{item.price_old}</p>
  </div>
  <div className="offer-red offerbuuton"><p className='my-auto'>{item.offer}</p></div>
</div>
        </Col> ))}
    </Row>
   </Container></section>
  )
}

export default DebitCardOffer