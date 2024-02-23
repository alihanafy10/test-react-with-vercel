import React from 'react'
import style from "./Modal.module.css"
export default function Modal(props) {
  let img = props.img
  let modalId = props.modalId
  return (
    <>
      <div
        className="modal fade"
        id={`${modalId}`}
        aria-hidden="true"
        aria-labelledby={`${modalId}Label`}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0 ">
              <img
                src={img}
                alt="imge"
                className={`w-100 ${style.overFlowHidden} rounded ${style.cPointer}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6"
        data-bs-target={`#${modalId}`}
        data-bs-toggle="modal"
      >
        <div
          className={`layer position-relative ${style.parentLayer} ${style.overFlowHidden} rounded`}
        >
          <img src={img} alt="imge" className={`w-100 ${style.cPointer}`} />
        </div>
      </div>
    </>
  );
}
