import { Box, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Title from '../Title/Title'
import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import { ShoppingCartRounded } from '@mui/icons-material'
import { CartContext } from '@/context/CartContext'

const ItemInfo = ({ data }) => {
    const { handleToggleCart, addItemToCart } = useContext(CartContext)
    return (
        <Box className={`grid jcfs aifs g50`}>
            <Title title={data.title} fw={800} h={"h4"} />
            <Box className={` grid jcs aic g30`}>
                <Box className={`flex jcfs aic flex_wrap g5`}>
                    <Title line={true} align={"left"} fw={700} h={"h5"} title={"Price :"} />
                    <Typography variant='h5'>{data.price} L.E</Typography>
                </Box>
                <Box className={`flex jcs aic flex_wrap g5`}>
                    <Title line={true} align={"left"} fw={700} h={"h5"} title={"Remaining Quantity :"} />
                    <Typography variant='h5'>{data.quantity}</Typography>
                </Box>
                <Paper className={`grid jcs aic g20 flex_wrap g5 pad10`}>
                    <Title line={true} align={"left"} fw={700} h={"h5"} title={"Dimensions (L x W x H)"} />
                    {
                        data.dimensions.map((data, i) => (
                            <Box className={`flex jcfs aic g10`}>
                                <Typography variant='h5' sx={{ color: (theme) => theme.palette.primary.main }}>#{i + 1}</Typography>
                                <Typography variant='h5'>L{data.length} x W{data.width} x H{data.height}</Typography>
                            </Box>
                        ))
                    }
                </Paper>
                <Box className={`flex jcs aic flex_wrap g5`}>
                    <Title line={true} align={"left"} fw={700} h={"h5"} title={"Category :"} />
                    <Typography variant='h5'>{data.category}</Typography>
                </Box>
            </Box>
            <PrimaryIconButton onClick={() => { addItemToCart({ data, number: 1 }); handleToggleCart() }} className={`flex jcc aic g10`}>
                <ShoppingCartRounded />
                <Typography variant='h6'>Add to Chart</Typography>
            </PrimaryIconButton>
        </Box>
    )
}

export default ItemInfo
