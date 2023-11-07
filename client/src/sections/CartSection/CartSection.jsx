import React from 'react'
import { PrimaryBox } from '@/MUIComponents/PrimaryBox'
import { PrimaryContainer } from '@/MUIComponents/PrimaryContainer'
import CartItems from '@/components/CartItems/CartItems'
import CartSummary from '@/components/CartSummary/CartSummary'
import styles from "./CartSection.module.scss"

const CartSection = () => {
    return (
        <PrimaryBox>
            <PrimaryContainer className={`grid aifs jcs g30 ${styles.cart_section}`}>
                <CartItems />
                <CartSummary />
            </PrimaryContainer>
        </PrimaryBox>
    )
}

export default CartSection
