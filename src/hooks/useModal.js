import { useCallback, useState } from "react"

export const useModal = (data) => {
    const [openModal, setOpenModal] = useState(false)
    const [dataModal, setDataModal] = useState(null)

    const handleOpenModal = useCallback((id) => {
        if(data){
            setDataModal(data.find(item => item.id === id))
        }
        setOpenModal(true)
    }, [data])

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return [
        openModal,
        handleOpenModal,
        handleCloseModal,
        dataModal
    ]
}