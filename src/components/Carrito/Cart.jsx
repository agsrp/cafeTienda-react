import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Carts from './Carts'
import Total from './Total'
import { Context } from '../../context/Context'
import './Cart.css'

const Cart = () => {
  const {cart} = useContext(Context)
  return (
    <>
    <Navbar/>
    {cart.length > 0 ?  (
      <>
      <Carts/>
      <Total/>
      </>
  ):(
    <h2 className='carVacio'>Carrito vacío</h2>
  )}
  </>
  )
}

export default Cart