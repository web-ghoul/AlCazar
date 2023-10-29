import React, { useContext } from 'react'
import { Box, Drawer } from '@mui/material'
import styles from "./CartSideBar.module.scss"
import { CartContext } from '@/context/CartContext';
import Title from '../Title/Title';
import CartItem from '../CartItem/CartItem';

const CartSideBar = () => {
    const { openCart, handleToggleCart, cartData } = useContext(CartContext)
    return (
        <Drawer
            anchor={"right"}
            open={openCart}
            onClose={handleToggleCart}
        >
            <Box className={`grid jcs aic g10 ${styles.drawer}`}>
                <Box className={`pad10`} sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
                    <Title color={"#fff"} align={"center"} h={"h4"} title={"My Cart"} />
                </Box>
                <Box className={`grid jcs aic g10 pad10`}>
                    {
                        cartData.length > 0 ? cartData.map((data, i) => (
                            <CartItem data={data} key={i} />
                        )) : (<Title title={'No Items Yet...'} color={"#ddd"} align={"center"} h={"h4"} />)
                    }
                </Box>
            </Box>
        </Drawer>
    )
}

export default CartSideBar
