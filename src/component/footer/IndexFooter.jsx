import React from 'react'
import Footer1 from './Footer1'
import Footer3 from './Footer3'
import Footer2 from './Footer2'

export default function IndexFooter(props) {
  return (
    <footer style={{backgroundColor:props.grayColor}}>
      <div className='container '>
        <div className='row text-center g-5'>
          <div className="col-md-4">
            <div className="layer">
              <Footer1/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="layer">
            <Footer2/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="layer">
            <Footer3/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
