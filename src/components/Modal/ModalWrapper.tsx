import React from "react"
import { IModal } from "../../types/types"

import "./modal.scss"

export const ModalWrapper: React.FC<IModal> = ({
    children,
    isOpen,
    setIsOpen,
}) => {
    const handleChangeModal = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsOpen(!isOpen)
        document.body.style.overflowY = "scroll"
    }

    const handleStopPropagationModal = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.stopPropagation()
    }

    return (
        <div className="modal" onClick={handleChangeModal}>
            <div onClick={handleStopPropagationModal} className="modal__body">
                {children}
            </div>
        </div>
    )
}
