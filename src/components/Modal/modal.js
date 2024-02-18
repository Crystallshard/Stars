import * as React from 'react'
import {
  modalBackground,
  modalContainer,
  button,
  title,
  body,
  footer,
} from './modal.module.css'

const Modal = ({closeModal, name}) => {

  

  return (
    <div className={modalBackground}>
      <div className={modalContainer}>
      <button className={button} onClick={()=> closeModal(false)}>X</button>
      <div className={title}>
        <h1>{name}</h1>
      </div>
      <div className={body}>
        size chart
      </div>
      <div className={footer}></div>
      </div>
    </div>
  )
}

export default Modal