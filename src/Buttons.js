import React from 'react'
import './components/button.css'

const Button = (props) => {
  return (
    <a href='#'>
      <div className='button'>
        <p>
          {props.name}
        </p>
      </div>
 </a>
  )
}

export default Button
