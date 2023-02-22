import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { debit } from '../data/debit-card'
import { links } from '../data/links'
import './home.css'
const Links = () => {
  return (
    <section className='links'>
   <Container className='  hideforsmalldevices'>
    <Row   >
    <div className="  mx-auto  d-flex px-auto py-lg-5 py-3">
 
 {links.map((link, index) => (
        <Col className=' col-lg-2 col-md-4 col-sm-3 d-flex '>
          <ul className='list-unstyled mx-auto '  >
          <h4 className='open-sans-font bold'>{link.head}</h4>
            {link.sub.map((sublink, subindex) => (
              <li key={subindex}>{sublink.p}</li>
            ))}
          </ul>
        
        </Col> 
      ))}
   
</div>
        
    </Row>
   </Container></section>
  )
}

export default Links