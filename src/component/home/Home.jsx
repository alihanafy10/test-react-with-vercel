import React from 'react'
import ContentHome from './ContentHome'
import DetalisHome from './DetalisHome'
import IndexFooter from '../footer/IndexFooter'
import FooterDown from '../footer/FooterDown'

export default function Home(props) {
  return (
    <>
      <section id='home' style={{ backgroundColor: props.greenColor }}>
      <div  className='up text-white container d-flex justify-content-center  align-items-center flex-column pt-5 mt-5'>
        <ContentHome />
          <DetalisHome />
      </div>
      </section>
      <IndexFooter grayColor={"#2c3e50"} />
      <FooterDown/>
      </>
  )
}
