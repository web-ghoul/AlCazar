import { CartContext } from '@/context/CartContext'
import { Box, Divider, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Address from '../UserAddresses/Address'
import { CheckCircleRounded, CheckRounded } from '@mui/icons-material'
import Title from '../Title/Title'
import LoadButton from '../LoadButton/LoadButton'
import { PrimaryIconButton } from '@/MUIComponents/PrimaryIconButton'
import "./Form.scss"
import { SecondaryButton } from '@/MUIComponents/SecondaryButton'

const ConfirmOrderForm = ({ loading }) => {
    const { chosenAddress, handleCloseConfirmOrderModal, cartData, cartCount, cartPrice } = useContext(CartContext)
    return (
        <>
            <Title
                title={"Confirm Order"}
                h={"h4"}
                align={"center"}
                fw={"600"}
            />
            <Paper className={`grid  jcs aic g20 pad20`}>
                <Box className={`flex jcfs aic g10`}>
                    <CheckCircleRounded sx={{ color: (theme) => theme.palette.whatsapp }} />
                    <Typography variant='h5' >Customer Address</Typography>
                </Box>
                <Divider />
                <Address address={chosenAddress} />
            </Paper>
            <Paper className={`grid  jcs aic g20 pad20`}>
                <Box className={`flex jcfs aic g10`}>
                    <CheckCircleRounded sx={{ color: (theme) => theme.palette.whatsapp }} />
                    <Typography variant='h5' >Order Details</Typography>
                </Box>
                <Divider />
                <Box className={`grid jcs aic g10`}>
                    {
                        cartData.map((data, i) => (
                            <Box key={i} className={`flex jcsb aic g20`} >
                                <Box className={`flex jcfs aic g10`}>
                                    <Box className={`item_image`} sx={{ backgroundImage: `url(${data.data.images[0]})` }} />
                                    <Title title={data.data.title} fw={500} h={"h6"} align={"left"} />
                                </Box>
                                <Typography variant='h6' >{data.number} QTY</Typography>
                            </Box>
                        ))
                    }
                </Box>
                <Divider />
            </Paper>
            <Paper className={`grid jcs aic g20 pad20`}>
                <Box className={`flex jcfs aic g10`}>
                    <CheckCircleRounded sx={{ color: (theme) => theme.palette.whatsapp }} />
                    <Typography variant='h5' >Order Summary</Typography>
                </Box>
                <Divider />
                <Box className={`grid jcs aic g10`}>
                    <Box className={`flex jcsb aic g20`}>
                        <Title
                            title={`Item's total (${cartCount})`}
                            h={"h6"}
                            fw={"500"}
                        />
                        <Typography variant='h6' className={`fw700`}>EGP {cartPrice}</Typography>
                    </Box>
                    <Box className={`flex jcsb aic g20`}>
                        <Title
                            title={`Delivery Fees`}
                            h={"h6"}
                            fw={"500"}
                        />
                        <Typography variant='h6' className={`fw700`}>EGP {Math.round(cartPrice * (5 / 100))}</Typography>
                    </Box>
                    <Box className={`flex jcsb aic g20`}>
                        <Title
                            title={`Total`}
                            h={"h6"}
                            fw={"700"}
                        />
                        <Typography variant='h5' className={`fw700`}>EGP {Math.round(cartPrice * (105 / 100))}</Typography>
                    </Box>
                </Box>
            </Paper>
            <Box className={`flex jcsb aic g20`}>
                <SecondaryButton onClick={handleCloseConfirmOrderModal}>Cancel</SecondaryButton>
                <LoadButton loading={loading}>
                    <PrimaryIconButton type="submit" className={`flex jcc aic g10`}>
                        <CheckRounded />
                        <Typography variant='h6' >Confirm Order</Typography>
                    </PrimaryIconButton>
                </LoadButton>
            </Box>
        </>
    )
}

export default ConfirmOrderForm
