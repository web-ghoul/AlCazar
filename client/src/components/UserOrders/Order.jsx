import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from '@mui/material'
import React from 'react'
import styles from "./UserOrders.module.scss"
import Title from '../Title/Title'
import { ExpandMore } from '@mui/icons-material'

const Order = ({ order, number }) => {
    console.log(new Date(order.createdAt).toLocaleDateString())
    return (
        <Accordion sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
            <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: (theme) => theme.palette.white }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Title color={"#fff"} title={`Order #${number}`} h={"h4"} fw={600} align={"left"} />
            </AccordionSummary>
            <AccordionDetails>
                <Box className={`grid jcs aic g30 ${styles.order} pad10`}>
                    <Typography sx={{ color: (theme) => theme.palette.white }} variant='h5' >On {new Date(order.createdAt).toLocaleDateString()} - {new Date(order.createdAt).toLocaleTimeString()}</Typography>
                    <Box className={`grid jcs aic g10 `}>
                        <Title color={"#fff"} title={`Items`} h={"h5"} fw={500} align={"left"} />
                        <Divider className={`${styles.order_divider}`} />
                        <Box className={`grid jcs aic g10`}>
                            {order.items.map((data, i) => (
                                <Box key={i} className={`flex jcsb aic g20`} >
                                    <Box className={`flex jcfs aic g10`}>
                                        <Box className={`${styles.item_image}`} sx={{ backgroundImage: `url(${data.data.images[0]})` }} />
                                        <Box className={`grid jcfs aic g5`}>
                                            <Title color={"#fff"} title={data.data.title} fw={700} h={"h6"} align={"left"} />
                                            <Title color={"#fff"} title={`EGP ${data.data.price}`} fw={500} h={"h6"} align={"left"} />
                                        </Box>
                                    </Box>
                                    <Typography sx={{ color: (theme) => theme.palette.white }} variant='h6' >{data.number} QTY</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box className={`grid jcs aic g10 `}>
                        <Title color={"#fff"} title={`Order Summary`} h={"h5"} fw={500} align={"left"} />
                        <Divider className={`${styles.order_divider}`} />
                        <Box className={`grid jcs aic g10`}>
                            <Box className={`flex jcsb aic g20`}>
                                <Title
                                    title={`Item's total`}
                                    h={"h6"}
                                    fw={"500"}
                                    color={"#fff"}
                                />
                                <Typography sx={{ color: (theme) => theme.palette.white }} variant='h6' className={`fw700`}>EGP {order.itemsTotal}</Typography>
                            </Box>
                            <Box className={`flex jcsb aic g20`}>
                                <Title
                                    title={`Delivery Fees`}
                                    h={"h6"}
                                    color={"#fff"}
                                    fw={"500"}
                                />
                                <Typography sx={{ color: (theme) => theme.palette.white }} variant='h6' className={`fw700`}>EGP {order.deliveryFees}</Typography>
                            </Box>
                            <Box className={`flex jcsb aic g20`}>
                                <Title
                                    title={`Total`}
                                    h={"h6"}
                                    color={"#fff"}
                                    fw={"700"}
                                />
                                <Typography sx={{ color: (theme) => theme.palette.white }} variant='h5' className={`fw700`}>EGP {order.totalPrice}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>

    )
}

export default Order
