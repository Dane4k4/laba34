import React from 'react'
import './components/header.css'
import logo from './img/logo.svg'
import Button from './Buttons'

const Header = () => {
  return (
    
    <div className='header'>
      <div className='container'>


        <div className='nav'>
        <img className='logo' src={logo}/>
        
        <Button name="меню"/>
        <Button name="о нас"/>
        <Button name="контакты"/>
        </div>
        

        
        <div className='text'>
          <div className='container'>
            
            <p>ДОДО ПИЦЦА</p>
            <p className='asd'>сеть пиццерий № 1 в России</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header


