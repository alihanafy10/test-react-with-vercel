

import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


export default function Footer2() {
  return (
    <div >
      <h2>AROUND THE WEB</h2>
      <ul className='d-flex justify-content-center'>
        <li className='me-1 ms-1 d-flex justify-content-center align-items-center p-3'><Link className='text-white fs-6' to="https://www.facebook.com/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></Link></li>
        <li className='me-1 ms-1 d-flex justify-content-center align-items-center p-3'><Link className='text-white fs-6' to="https://www.twitter.com/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></Link></li>
        <li className='me-1 ms-1 d-flex justify-content-center align-items-center p-3'><Link className='text-white fs-6' to="https://www.linkedin.com/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
        <li className='me-1 ms-1 d-flex justify-content-center align-items-center p-3'><Link  className='text-white fs-6'to="https://www.facebook.com/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGlobe} /></Link></li>
        
      </ul>
      
    </div>
  )
}
