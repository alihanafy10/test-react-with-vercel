import React from 'react'
import Title from '../../title/Title'
import Inputs from './inputs/Inputs'

export default function Contact() {
  let styles = {
    colorh: "#2c3e50",
    colorc:'#fff',
    fontw: "bold",
  }
  return (
    <>
      <section id='contact'>
        <div className="container">
          <Title forTilte={"PORTFOLIO COMPONENT"} cw={styles} />
          <Inputs/>
        </div>
    </section>
    </>
  )
}
