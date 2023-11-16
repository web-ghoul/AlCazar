"use client"
import React, { useEffect } from 'react'
import ItemImages from '@/components/ItemImages/ItemImages'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { getItem } from '@/store/itemSlice'
import { PrimaryBox } from '@/MUIComponents/PrimaryBox'
import { PrimaryContainer } from '@/MUIComponents/PrimaryContainer'
import styles from "./ItemSection.module.scss"
import ItemInfo from '@/components/ItemInfo/ItemInfo'

const ItemSection = () => {
    const { itemId } = useParams()
    const dispatch = useDispatch()
    const { item, isLoading } = useSelector((state) => state.item)
    useEffect(() => {
        dispatch(getItem({ item_id: itemId }))
    }, [dispatch])
    return !isLoading && item && (
        <PrimaryBox>
            <PrimaryContainer className={`grid jcs aifs g50 ${styles.item_section_box}`}>
                <ItemImages images={item.images} />
                <ItemInfo data={item} />
            </PrimaryContainer>
        </PrimaryBox>
    )
}

export default ItemSection
