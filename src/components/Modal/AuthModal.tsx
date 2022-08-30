import React, { useState, useCallback } from "react"
import { IModal } from "../../types/types"
import { ModalWrapper } from "./ModalWrapper"

import "./modal.scss"
import { Input } from "../UI/Input/Input"
import Button from "../UI/Button/Button"

interface IProps {
    openReg: () => void
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

export const AuthModal: React.FC<IProps> = ({ isOpen, setIsOpen, openReg }) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleChangeEmailValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value)
        },
        []
    )
    const handleChangePasswordValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
        },
        []
    )

    const closeAuthModalAndOpenReg = () => {
        setIsOpen(false)
        openReg()
    }

    return (
        <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="modal__title">Вход</div>
            <Input
                changeValue={handleChangeEmailValue}
                value={email}
                title={"E-mail:"}
                placeholder={"example@mail.ru"}
            />
            <Input
                changeValue={handleChangePasswordValue}
                value={password}
                title={"Password:"}
                placeholder="xxx-xxx-xxx"
                type={"password"}
            />
            <div className="auth__forget">Забыли пароль?</div>
            <div className="auth__reg">
                <span>Еще не зарегестрированы?</span>{" "}
                <span onClick={closeAuthModalAndOpenReg}>Зарегистрироваться</span>
            </div>
            <Button title="Войти" yourClass="auth__btn" />
        </ModalWrapper>
    )
}
