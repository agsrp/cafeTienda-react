import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import './Cart.css'

const Contador = ({product}) => {

    const {cart, setCart, buyProducts} = useContext(Context)

    const decrease = () => {
        const proRepe = cart.find((item) => item.id === product.id)

        proRepe.quanty !==1 &&
        setCart(cart.map((item) => (item.id === product.id ? {... product, quanty:proRepe.quanty - 1} : item)))
    }

  return (
    <div className='increDecre'>
        <a onClick={() => decrease(product)}>-</a>
        <p>{product.quanty}</p>
        <a onClick={() => buyProducts(product)}>+</a>
    </div>
  )
}

export default Contador