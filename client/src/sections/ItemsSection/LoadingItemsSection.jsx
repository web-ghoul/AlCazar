import LoadingItemBox from '@/components/ItemBox/LoadingItemBox'
import React from 'react'

const LoadingItemsSection = ({ editable }) => {
    return (
        new Array(Math.floor(Math.random() * 20)).fill(0).map((_, i) =>
            (<LoadingItemBox key={i} editable={editable} />)
        )
    )
}

export default LoadingItemsSection
