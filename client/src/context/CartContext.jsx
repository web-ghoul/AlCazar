import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [openCart, setOpenCart] = useState(false)
    const [cartData, setCartData] = useState([])
    const [cartPrice, setCartPrice] = useState(0)
    const [cartCount, setCartCount] = useState(0)
    const [chosenAddress, setChosenAddress] = useState(null)
    const [chosenData, setChosenData] = useState(null)
    const [openChooseAddressModal, setOpenChooseAddressModal] = useState(false)
    const [openConfirmOrderModal, setOpenConfirmOrderModal] = useState(false)

    const handleToggleCart = () => {
        setOpenCart(!openCart)
    }

    const getDataFromLocalStorage = () => {
        if (localStorage.getItem("cart_data")) {
            const data = JSON.parse(localStorage.getItem("cart_data"))
            setCartData(data)
        }
        if (localStorage.getItem("cart_price")) {
            setCartPrice(+JSON.parse(localStorage.getItem("cart_price")))
        }
        if (localStorage.getItem("cart_count")) {
            setCartCount(+JSON.parse(localStorage.getItem("cart_count")))
        }
        if (localStorage.getItem("order_address")) {
            setChosenAddress(JSON.parse(localStorage.getItem("order_address")))
        }
    }

    const resetCartFromLocalStorage = () => {
        localStorage.removeItem("cart_data")
        localStorage.removeItem("cart_price")
        localStorage.removeItem("cart_count")
        localStorage.removeItem("order_address")
    }

    const resetCart = () => {
        setCartData([])
        setCartPrice(0)
        setCartCount(0)
        setChosenAddress(null)
    }

    const addItemToCart = (data) => {
        const newPrice = cartPrice + data.data.price
        var isExist = false
        cartData.map((d) => {
            if (d.data._id === data.data._id && d.dimension === data.dimension) {
                isExist = true
                if (d.number < d.data.quantity) {
                    d.number += data.number
                    setCartCount(cartCount + 1)
                    localStorage.setItem("cart_count", JSON.stringify(cartCount + 1))
                    localStorage.setItem("cart_data", JSON.stringify(cartData))
                }
            }
        })
        if (!isExist) {
            setCartCount(cartCount + 1)
            localStorage.setItem("cart_count", JSON.stringify(cartCount + 1))
            const newData = [...cartData, data]
            setCartData(newData)
            localStorage.setItem("cart_data", JSON.stringify(newData))
        }
        setCartPrice(newPrice)
        localStorage.setItem("cart_price", JSON.stringify(newPrice))
    }

    const removeItemFromCart = (data) => {
        const newCartData = cartData.filter((_, i) => i != data.index)
        const newPrice = cartPrice - (+data.price * +data.number)
        const newCount = cartCount - data.number
        setCartCount(newCount)
        setCartPrice(newPrice)
        setCartData(newCartData)
        localStorage.setItem("cart_data", JSON.stringify(newCartData))
        localStorage.setItem("cart_price", JSON.stringify(newPrice))
        localStorage.setItem("cart_count", JSON.stringify(newCount))
    }

    const incrementItemNumber = (index) => {
        let quantity = 0;
        if (cartData.length > index) {
            const d = cartData[index]
            cartData.map((data) => {
                if (data.data._id === d.data._id) {
                    quantity += data.number
                }
            })
            if (d.data.quantity > quantity) {
                const newPrice = cartPrice + d.data.price
                setCartPrice(newPrice)
                localStorage.setItem("cart_price", JSON.stringify(newPrice))
                setCartCount(cartCount + 1)
                localStorage.setItem("cart_count", JSON.stringify(cartCount + 1))
                d.number += 1
            }
            localStorage.setItem("cart_data", JSON.stringify(cartData))
        }
    }

    const decrementItemNumber = (index) => {
        const d = cartData[index]
        if (d.number > 1) {
            d.number -= 1
            setCartCount(cartCount - 1)
            localStorage.setItem("cart_count", JSON.stringify(cartCount - 1))
            const newPrice = cartPrice - d.data.price
            setCartPrice(newPrice)
            localStorage.setItem("cart_price", JSON.stringify(newPrice))
        } else {
            removeItemFromCart({ price: d.data.price, number: d.number, index })
        }
        localStorage.setItem("cart_data", JSON.stringify(cartData))
    }

    const handleCloseChooseAddressModal = () => {
        setOpenChooseAddressModal(false)
    }

    const handleOpenChooseAddressModal = () => {
        setOpenChooseAddressModal(true)
    }

    const handleOpenConfirmOrderModal = () => {
        setOpenConfirmOrderModal(true)
    }

    const handleCloseConfirmOrderModal = () => {
        setOpenConfirmOrderModal(false)
    }

    const chooseAddress = (address) => {
        setChosenAddress(address)
        localStorage.setItem("order_address", JSON.stringify(address))
    }

    return (
        <CartContext.Provider value={{ chosenData, setChosenData, resetCartFromLocalStorage, chosenAddress, chooseAddress, resetCart, openConfirmOrderModal, handleOpenConfirmOrderModal, handleCloseConfirmOrderModal, handleCloseChooseAddressModal, handleOpenChooseAddressModal, openChooseAddressModal, openCart, cartCount, cartPrice, setCartPrice, cartData, removeItemFromCart, handleToggleCart, addItemToCart, incrementItemNumber, decrementItemNumber, getDataFromLocalStorage }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
