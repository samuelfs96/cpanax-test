import { useState } from "react"

export const usePagination = ({
    initialPage,
    initialMaxPage
}) => {
    const [maxItems, setMaxItems] = useState(initialMaxPage)
    const [currentPage, setCurrentPage] = useState(initialPage)

    const onChangeMaxItems = (item) => {
        setCurrentPage(1)
        setMaxItems(item)
    }
    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    return {
        maxItems,
        currentPage,
        onChangeMaxItems,
        onPageChange
    }
}