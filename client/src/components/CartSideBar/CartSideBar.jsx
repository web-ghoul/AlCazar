import React, { useContext } from 'react'
import { Box, Divider, Drawer, IconButton, Typography } from '@mui/material'
import styles from "./CartSideBar.module.scss"
import { CartContext } from '@/context/CartContext';
import Title from '../Title/Title';
import CartItem from '../CartItem/CartItem';
import { CloseRounded, ShoppingCart } from '@mui/icons-material';
import { SecondaryButton } from '@/MUIComponents/SecondaryButton';
import { useRouter } from 'next/navigation';

const CartSideBar = () => {
    const { openCart, cartPrice, handleToggleCart, cartData } = useContext(CartContext)
    const router = useRouter()
    const handleGoToCartPage = () => {
        router.push(`${process.env.NEXT_PUBLIC_CART_PAGE}`)
        handleToggleCart()
    }
    return (
        <Drawer
            anchor={"right"}
            open={openCart}
            onClose={handleToggleCart}
        >
            <Box className={`grid jcs aic g30  ${styles.drawer}`}>
                <Box className={`pad20`} sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
                    <IconButton onClick={handleToggleCart} className={`${styles.close_icon}`}>
                        <CloseRounded sx={{ color: (theme) => theme.palette.white }} />
                    </IconButton>
                    <Title color={"#fff"} align={"center"} h={"h4"} title={"My Cart"} />
                </Box>
                <Box className={` flex jcc aic pad10`}>
                    <SecondaryButton onClick={handleGoToCartPage} className={`flex jcc aic g10`}>
                        <ShoppingCart />
                        <Typography>Got to Cart Page</Typography>
                    </SecondaryButton>
                </Box>
                <Box className={`grid jcs aic g30 pad20`}>
                    {
                        cartData.length > 0 ? (
                            <Box className={`grid jcs aic g10 ${styles.cart_items_box}`}>
                                {cartData.map((data, i) => (
                                    <CartItem index={i} data={data} key={i} />
                                ))}
                            </Box>
                        ) : (<Title title={'No Items Yet...'} color={"#ddd"} align={"center"} h={"h4"} />)
                    }
                    {
                        cartPrice > 0 && <Divider />
                    }
                    {
                        cartPrice > 0 && (<Box className={`flex jcfs aic g10 pad10`}>
                            <Title title={"Total : "} align={"left"} fw={600} h={"h4"} />
                            <Typography variant='h5'>EGP {cartPrice}</Typography>
                        </Box>)
                    }
                </Box>
            </Box>
        </Drawer>
    )
}

export default CartSideBar
