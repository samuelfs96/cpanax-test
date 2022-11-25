import { useState } from "react"

export const usePagination = () => {
    const [maxItems, setMaxItems] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)

    const onChangeMaxItems = (item) => {
        setCurrentPage(1)
        setMaxItems(item)
    }
    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    return [
        maxItems,
        currentPage,
        onChangeMaxItems,
        onPageChange
    ]
}