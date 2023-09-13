'use client'

import { useState } from "react"

const UseModalHook = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const handleModalStatus = () => {
        setModalOpen(!modalOpen)
    }

    return {handleModalStatus, modalOpen}
}

export default UseModalHook