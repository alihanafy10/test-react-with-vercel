
import React from 'react'
import Modal from './modal/Modal'
import Title from '../../title/Title'
import imge1 from "../../assets/image/poert1.png"
import imge2 from "../../assets/image/port2.png"
import imge3 from "../../assets/image/port3.png"
import IndexFooter from '../footer/IndexFooter'
import FooterDown from '../footer/FooterDown'
export default function Portfolio() {
  let styles = {
    colorh: "#2c3e50",
    colorc:'#fff',
    fontw: "bold",
  }

  return (
    <>
      <section id='portfolio' className='pb-5 mb-4'>
        <Title forTilte={"PORTFOLIO COMPONENT"} cw={styles} />
        <div className='container d-flex align-items-center pt-4'>
          <div className='row g-5'>
            <Modal img={imge2} modalId="modal1" />
            <Modal img={imge1} modalId="modal2" />
            <Modal img={imge3} modalId="modal3" />
            <Modal img={imge1} modalId="modal2" />
            <Modal img={imge3} modalId="modal3" />
            <Modal img={imge2} modalId="modal1" />
          </div>
        </div>
      </section>
      <IndexFooter grayColor={ "#2c3e50"} />
      <FooterDown/>
    </>
  )
}

