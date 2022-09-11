import React from 'react'

const NavBar = ({items,setItems}) => {
  return (
    <div className="bg-green-300 py-24 text-green1"> Cantidad de productos en el carrito de compras: {items}</div>
  )
}

export default NavBar