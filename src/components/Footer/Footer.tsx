import React from "react"
import { Link } from "react-router-dom"
import BasketIcon from "../../assets/icons/BasketIcon"
import UserIcon from "../../assets/icons/UserIcon"
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon"
import Button from "../UI/Button/Button"

import "./footer.scss"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__logo">LOGO</div>
                <div className="footer__time">
                    <strong>Часы работы:</strong>
                    <span>Пн-Чт: 08:00 — 23:00</span>
                    <span>Пт: 08:00 — 01:00</span>
                    <span>Сб: 11:00 — 01:00</span>
                    <span>Вс: 11:00 — 23:00</span>
                </div>
                <div className="footer__contacts">
                    <span>+7 (977) 956 83-20 </span>
                    <span>
                        <strong>Адрес:</strong>
                        <p>Москва, ул. Арбат д.23</p>
                    </span>
                </div>
            </div>
        </footer>
    )
}
