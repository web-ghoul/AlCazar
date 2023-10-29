import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [openCart, setOpenCart] = useState(false)
    const [cartData, setCartData] = useState([])
    const handleToggleCart = () => {
        setOpenCart(!openCart)
    }
    const addItemToCart = (data) => {
        setCartData([...cartData, data])
    }

    const removeItemFromCart = (id) => {
        setCartData(cartData.filter((data) => data._id != id))
    }
    return (
        <CartContext.Provider value={{ openCart, cartData, removeItemFromCart, handleToggleCart, addItemToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
