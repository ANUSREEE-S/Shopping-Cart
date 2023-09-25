import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div className=''>

    <div className='header'>
      <div onClick={()=>props.handleShow(false)} >
        Shopping Cart App
      </div>
      <div onClick={()=>props.handleShow(true)} >
        cart
        <sup>{props.count}</sup>
        </div>
    </div>
    </div>
  )
}

export default Header

// onClick={() => props.handleShow(true)}
// {props.count}
// onClick={() => props.handleShow(false)}