import React from 'react'
import  { useState } from 'react';
import style from "./Inputs.module.css";
export default function Input(props) {
  const [word, setWord] = useState(0);
  function typeing(e) {
    if (e.target.value) {
      setWord(1);
    } else {
      setWord(0);
    }
  }

  const topValue =(word === 1) ? '-30px' : '0';
  const col = "#1abc9c";
  return (
    <>
    <div className={`${style.parentInput} pb-5`}>
        <p style={{ color: col, top: topValue ,transition:'0.3s'}} >{`${props.texte} :`}</p>
        <input onInput={typeing} type={props.typeing} placeholder={props.texte} className={`w-100 p-2 rounded ${style.inputShap}`} />
      </div>
    </>
  )
}
