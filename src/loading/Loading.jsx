import React from 'react'
import style from './Loading.module.css'
export default function Loading() {
  console.log(style)
  return (
    <div>
      <div className={style.loader}>
  <div className={`${style.cell} ${style.d0}`} />
  <div className={`${style.cell} ${style.d1}`} />
  <div className={`${style.cell} ${style.d2}`} />
  <div className={`${style.cell} ${style.d1}`} />
  <div className={`${style.cell} ${style.d2}`}  />
  <div className={`${style.cell} ${style.d2}`}  />
  <div className={`${style.cell} ${style.d3}`}  />
  <div className={`${style.cell} ${style.d3}`}  />
  <div className={`${style.cell} ${style.d4}`}  />
</div>

    </div>
  )
}
