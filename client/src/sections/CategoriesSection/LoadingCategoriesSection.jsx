import React from 'react'
import LoadingCategory from '@/components/Category/LoadingCategory'

const LoadingCategoriesSection = ({ editable }) => {
    return (
        new Array(Math.floor(6)).fill(0).map((_, i) =>
        (
            <LoadingCategory key={i} editable={editable} />
        )
        )
    )
}

export default LoadingCategoriesSection
