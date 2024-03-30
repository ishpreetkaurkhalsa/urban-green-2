import React from 'react'
import styles from "./InputControl.module.css"
const InputControl = (props) => {
  return (
    <div className={styles.container}>
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props} className='tracking-wide text-[15px] font-light tracking-tight text-black-500 '/>
    </div>
  )
}

export default InputControl