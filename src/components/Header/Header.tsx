import React, { useState, useCallback } from "react"
import { Link } from "react-router-dom"
import BasketIcon from "../../assets/icons/BasketIcon"
import UserIcon from "../../assets/icons/UserIcon"
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon"
import { AuthModal } from "../Modal/AuthModal"
import { RegistrationModal } from "../Modal/RegistrationModal"
import Button from "../UI/Button/Button"

import "./header.scss"

export const Header: React.FC = () => {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
    const [isRegModal, setIsRegModal] = useState<boolean>(false)

    const handleAuthorization = useCallback(() => {
        document.body.style.overflowY = "hidden"
        setIsAuthModal(true)
    }, [])
    const handleRegistration = useCallback(() => {
        setIsRegModal(true)
    }, [])

    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <div className="header__top">
                        <nav className="header__top_links">
                            <Link to="/" className="link active">
                                Главная
                            </Link>
                            <Link to="/delivery" className="link">
                                Доставка
                            </Link>
                            <Link to="/about" className="link">
                                О нас
                            </Link>
                        </nav>
                        <div className="header__top_logo"> LOGO </div>
                        <div className="header__top_info header__info">
                            <div className="header__info_number">
                                <a href="tel:79779568320">
                                    {" "}
                                    +7 (977) 956 83-20{" "}
                                </a>
                                <WhatsAppIcon />
                            </div>

                            <div
                                className="header__info_user"
                                onClick={handleAuthorization}
                            >
                                <UserIcon />
                            </div>

                            <div className="header__info_basket">
                                <BasketIcon />
                            </div>
                        </div>
                    </div>
                    <div className="header__bottom">
                        <h3 className="header__bottom_minititle">
                            Мы делаем вкусные и аппетитные бургеры, которые
                            приготовлены на свежем и сочном мясе!
                        </h3>
                        <h1 className="header__bottom_title">
                            Бургеры - наше все!
                        </h1>
                        <Button title="Заказать" />
                    </div>
                </div>
            </header>
            {isAuthModal && (
                <AuthModal
                    isOpen={isAuthModal}
                    setIsOpen={setIsAuthModal}
                    openReg={handleRegistration}
                />
            )}
            {isRegModal && (
                <RegistrationModal
                    isOpen={isRegModal}
                    setIsOpen={setIsRegModal}
                    openLog={handleAuthorization}
                />
            )}
        </>
    )
}
