import React from 'react'
import './components/body.css'
import Button from './Buttons'
const Body = () => {
  return (
    <div>
        <div className='containers'>
        <Button name="Пицца"/>
        <Button name="Комбо"/>
        <Button name="Закуски"/>
        <Button name="Коктейли"/>
        <Button name="Кофе"/>
        </div>
      
    </div>
  )
}

export default Body
