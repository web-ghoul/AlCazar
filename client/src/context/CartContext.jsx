import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [openCart, setOpenCart] = useState(false)
    const [cartData, setCartData] = useState([])
    const [cartPrice, setCartPrice] = useState(0)
    const handleToggleCart = () => {
        setOpenCart(!openCart)
    }
    const addItemToCart = (data) => {
        setCartPrice(cartPrice + data.data.price)
        var isExist = false
        cartData.map((d, i) => {
            if (d.data._id === data.data._id) {
                isExist = true
                if (d.number < d.data.quantity) {
                    d.number += data.number
                }
            }
        })
        if (!isExist) {
            setCartData([...cartData, data])
        }
    }

    const removeItemFromCart = (id) => {
        const newCartData = cartData.filter((data) => data.data._id != id)
        setCartData(newCartData)
    }

    const incrementItemNumber = (id) => {
        cartData.map((d) => {
            if (d.data._id === id) {
                if (d.data.quantity > d.number) {
                    setCartPrice(cartPrice + d.data.price)
                    d.number += 1
                }
            }
        })
    }

    const decrementItemNumber = (id) => {
        cartData.map((d) => {
            if (d.data._id === id) {
                if (d.number > 1) {
                    d.number -= 1
                } else {
                    removeItemFromCart(id)
                }
                setCartPrice(cartPrice - d.data.price)
            }
        })
    }


    return (
        <CartContext.Provider value={{ openCart, cartPrice, setCartPrice, cartData, removeItemFromCart, handleToggleCart, addItemToCart, incrementItemNumber, decrementItemNumber }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
