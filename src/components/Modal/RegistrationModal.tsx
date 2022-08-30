import React, { useState, useCallback } from "react"
import { IModal } from "../../types/types"
import { ModalWrapper } from "./ModalWrapper"

import "./modal.scss"
import { Input } from "../UI/Input/Input"
import Button from "../UI/Button/Button"
import { Checkbox } from "../UI/Checkbox/Checkbox"

interface IProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void,
    openLog: () => void
}

export const RegistrationModal: React.FC<IProps> = ({ isOpen, setIsOpen, openLog }) => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [repeatPassword, setRepeatPassword] = useState<string>("")
    const [isPolitics, setIsPolitics] = useState<boolean>(false)

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
    const handleChangeRepeatPasswordValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setRepeatPassword(e.target.value)
        },
        []
    )
    const handleChangeNameValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value)
        },
        []
    )
    const handleChangePoliticsValue = useCallback(
        () => {
            setIsPolitics(!isPolitics)
        },
        [isPolitics]
    )

    const closeRegModalAndOpenLogin = () => {
        setIsOpen(false)
        openLog()
    }

    return (
        <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="modal__title">Регистрация</div>
            <Input
                changeValue={handleChangeNameValue}
                value={name}
                title={"Имя:"}
                placeholder={"Алексей, Дмитрий"}
            />
            <Input
                changeValue={handleChangeEmailValue}
                value={email}
                title={"E-mail:"}
                placeholder={"example@mail.ru"}
            />
            <Input
                changeValue={handleChangePasswordValue}
                value={password}
                title={"Пароль:"}
                placeholder="xxx-xxx-xxx"
                type={"password"}
            />
            <Input
                changeValue={handleChangeRepeatPasswordValue}
                value={repeatPassword}
                title={"Повторите пароль:"}
                placeholder="xxx-xxx-xxx"
                type={"password"}
            />
            <Checkbox changeValue={handleChangePoliticsValue} title={"Я соглашаюсь с политика конфендициальности"} value={isPolitics} />
            <div className="auth__reg">
                <span>Уже зарегистрированы?</span>{" "}
                <span onClick={closeRegModalAndOpenLogin}>Войти</span>
            </div>
            <Button title="Зарегистрироваться" yourClass="auth__btn" />
        </ModalWrapper>
    )
}
