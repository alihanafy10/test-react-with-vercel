import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Title(x) {
  let colorh 
    let colorc 
    let fontw 
  if (x.cw) {
  colorh = x.cw.colorh;
  colorc = x.cw.colorc;
  fontw = x.cw.fontw;
  }
  else {
  colorh = "";
  colorc = "";
  fontw = "";
  }
  return (
    <>
      <h1 className='mt-4 text-center ' style={{color:colorh,fontWeight:fontw}}>{x.forTilte }</h1>
      <p className='awsem' >
          <FontAwesomeIcon icon={faStar} />
        </p>
    </>
  )
}
