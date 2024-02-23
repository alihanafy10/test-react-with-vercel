import React from 'react'
import IndexFooter from '../footer/IndexFooter'
import FooterDown from '../footer/FooterDown'
import Title from '../../title/Title'

export default function About(props) {
  return (
    <>
    <section style={{backgroundColor:props.greenColor}} className='pt-5'>
      <div className='up container d-flex flex-column justify-content-center align-items-center text-white'>
          <div>
            <Title forTilte={"ABOUT COMPONENT"} />
            <div className='d-flex justify-content-evenly'>
              <div>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
              <div>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
            </div>
        </div>
      </div>
      </section>
      <IndexFooter grayColor={ "#2c3e50"} />
      <FooterDown/>
    </>
  )
}

