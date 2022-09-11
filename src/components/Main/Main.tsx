import React, { useRef } from "react"

import burgerIcon from "../../assets/imgs/burger.jpg"
import burger2Icon from "../../assets/imgs/burger2.jpg"
import iceteaIcon from "../../assets/imgs/icetea.jpg"
import rolIcon from "../../assets/imgs/rol.jpg"
import kidIcon from "../../assets/imgs/kid.jpg"
import soupIcon from "../../assets/imgs/soup.jpg"
import vasabiIcon from "../../assets/imgs/vasabi.jpg"
import saladIcon from "../../assets/imgs/salad.jpg"
import desertIcon from "../../assets/imgs/desert.jpg"

import Button from "../UI/Button/Button"

import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps"
import "./main.scss"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export const Main: React.FC = () => {
    const refReviews = useRef<HTMLDivElement>(null)


    return (
        <main className="main">
            <div className="menu-list">
                <div className="menu-list__container">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={5}
                        navigation
                        modules={[Navigation]}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className="menu-list__items"
                    >
                       <SwiperSlide>
                            <div className="menu-list__item" >
                                <div className="menu-list__item_title">Бургеры</div>
                            </div>
                       </SwiperSlide>
                       <SwiperSlide>
                            <div className="menu-list__item">
                                <div className="menu-list__item_title">Бургеры</div>
                            </div>
                       </SwiperSlide>
                       <SwiperSlide>
                            <div className="menu-list__item">
                                <div className="menu-list__item_title">Бургеры</div>
                            </div>
                       </SwiperSlide>
                       <SwiperSlide>
                            <div className="menu-list__item">
                                <div className="menu-list__item_title">Бургеры</div>
                            </div>
                       </SwiperSlide>
                       <SwiperSlide>
                            <div className="menu-list__item">
                                <div className="menu-list__item_title">Бургеры</div>
                            </div>
                       </SwiperSlide>
                       <SwiperSlide>
                            <div className="menu-list__item">
                                <div className="menu-list__item_title">Бургеры</div>
                            </div>
                       </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="why-choose-us container">
                <div className="why-choose-us__title">Почему выбирают нас?</div>
                <div className="why-choose-us__block">
                    <div className="why-choose-us__block_text mr">
                        Наша компания делает вкусные и сочные бургеры. На рынке
                        мы прославились, как самая лучшная компания по
                        произовдству бургеров. Это из- за того что каждый день
                        мы стараемся делать и изготовливать что-то новоею. Все
                        поситетли довольны качеством и обслуживанием нашего
                        ресторана. Наши поставщики являются номер 1 на рынке.
                        Товары - свежие и очень-очень вкусные. Спасибо , что
                        выбираете нас!
                    </div>
                    <div className="why-choose-us__block_img">
                        <img src={burgerIcon} alt="" />{" "}
                    </div>
                </div>
                <div className="why-choose-us__block">
                    <div className="why-choose-us__block_img">
                        <img src={burgerIcon} alt="" />{" "}
                    </div>
                    <div className="why-choose-us__block_text ml">
                        Наша компания делает вкусные и сочные бургеры. На рынке
                        мы прославились, как самая лучшная компания по
                        произовдству бургеров. Это из- за того что каждый день
                        мы стараемся делать и изготовливать что-то новоею. Все
                        поситетли довольны качеством и обслуживанием нашего
                        ресторана. Наши поставщики являются номер 1 на рынке.
                        Товары - свежие и очень-очень вкусные. Спасибо , что
                        выбираете нас!
                    </div>
                </div>
            </div>
            <div className="menu container">
                <div className="menu__title">Меню</div>
                <div className="menu__items">
                    <div className="menu__items_item">
                        <div className="menu__items_item_photo">
                            <img src={burger2Icon} alt="" />
                        </div>
                        <div className="menu__items_item_text">Гранд спешл</div>
                        <div className="menu__items_item_reciept">
                            грибы шиитаке, авокадо, баклажан, киноа, перец
                            гриль, руккола, 6 шт.
                        </div>
                        <div className="menu__items_item_price">460 р.</div>
                        <div className="menu__items_item_btn">
                            <Button title="Добавить" />{" "}
                        </div>
                    </div>
                    <div className="menu__items_item">
                        <div className="menu__items_item_photo">
                            <img src={iceteaIcon} alt="" />
                        </div>
                        <div className="menu__items_item_text">Гранд спешл</div>
                        <div className="menu__items_item_reciept">
                            грибы шиитаке, авокадо, баклажан, киноа, перец
                            гриль, руккола, 6 шт.
                        </div>
                        <div className="menu__items_item_price">460 р.</div>
                        <div className="menu__items_item_btn">
                            <Button title="Добавить" />{" "}
                        </div>
                    </div>
                    <div className="menu__items_item">
                        <div className="menu__items_item_photo">
                            <img src={rolIcon} alt="" />
                        </div>
                        <div className="menu__items_item_text">Гранд спешл</div>
                        <div className="menu__items_item_reciept">
                            грибы шиитаке, авокадо, баклажан, киноа, перец
                            гриль, руккола, 6 шт.
                        </div>
                        <div className="menu__items_item_price">460 р.</div>
                        <div className="menu__items_item_btn">
                            <Button title="Добавить" />{" "}
                        </div>
                    </div>
                    <div className="menu__items_item">
                        <div className="menu__items_item_photo">
                            <img src={kidIcon} alt="" />
                        </div>
                        <div className="menu__items_item_text">Гранд спешл</div>
                        <div className="menu__items_item_reciept">
                            грибы шиитаке, авокадо, баклажан, киноа, перец
                            гриль, руккола, 6 шт.
                        </div>
                        <div className="menu__items_item_price">460 р.</div>
                        <div className="menu__items_item_btn">
                            <Button title="Добавить" />{" "}
                        </div>
                    </div>
                    <div className="menu__items_item">
                        <div className="menu__items_item_photo">
                            <img src={soupIcon} alt="" />
                        </div>
                        <div className="menu__items_item_text">Гранд спешл</div>
                        <div className="menu__items_item_reciept">
                            грибы шиитаке, авокадо, баклажан, киноа, перец
                            гриль, руккола, 6 шт.
                        </div>
                        <div className="menu__items_item_price">460 р.</div>
                        <div className="menu__items_item_btn">
                            <Button title="Добавить" />{" "}
                        </div>
                    </div>
                    <div className="menu__items_item">
                        <div className="menu__items_item_photo">
                            <img src={vasabiIcon} alt="" />
                        </div>
                        <div className="menu__items_item_text">Гранд спешл</div>
                        <div className="menu__items_item_reciept">
                            грибы шиитаке, авокадо, баклажан, киноа, перец
                            гриль, руккола, 6 шт.
                        </div>
                        <div className="menu__items_item_price">460 р.</div>
                        <div className="menu__items_item_btn">
                            <Button title="Добавить" />{" "}
                        </div>
                    </div>
                    <div className="menu__items_item">
                        <div className="menu__items_item_photo">
                            <img src={saladIcon} alt="" />
                        </div>
                        <div className="menu__items_item_text">Гранд спешл</div>
                        <div className="menu__items_item_reciept">
                            грибы шиитаке, авокадо, баклажан, киноа, перец
                            гриль, руккола, 6 шт.
                        </div>
                        <div className="menu__items_item_price">460 р.</div>
                        <div className="menu__items_item_btn">
                            <Button title="Добавить" />{" "}
                        </div>
                    </div>
                    <div className="menu__items_item">
                        <div className="menu__items_item_photo">
                            <img src={desertIcon} alt="" />
                        </div>
                        <div className="menu__items_item_text">Гранд спешл</div>
                        <div className="menu__items_item_reciept">
                            грибы шиитаке, авокадо, баклажан, киноа, перец
                            гриль, руккола, 6 шт.
                        </div>
                        <div className="menu__items_item_price">460 р.</div>
                        <div className="menu__items_item_btn">
                            <Button title="Добавить" />{" "}
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews">
                <div className="reviews__title">Отзывы</div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    className="reviews__items"
                    navigation
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <div ref={refReviews} className="reviews__items">
                        <SwiperSlide>
                            <div className="reviews__items_item">
                                <div className="reviews__items_item_photo"></div>
                                <div className="reviews__items_item_rate">
                                    5 баллов
                                </div>
                                <div className="reviews__items_item_text">
                                    Самая лучшая бургерная бургерная бургерная
                                    бургерная бургерная бургерная бургерная
                                    бургерная бургерная бургерная бургерная
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="reviews__items_item">
                                <div className="reviews__items_item_photo"></div>
                                <div className="reviews__items_item_rate">
                                    5 баллов
                                </div>
                                <div className="reviews__items_item_text">
                                    Самая лучшая бургерная бургерная бургерная
                                    бургерная бургерная бургерная бургерная
                                    бургерная бургерная бургерная бургерная
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="reviews__items_item">
                                <div className="reviews__items_item_photo"></div>
                                <div className="reviews__items_item_rate">
                                    5 баллов
                                </div>
                                <div className="reviews__items_item_text">
                                    Самая лучшая бургерная бургерная бургерная
                                    бургерная бургерная бургерная бургерная
                                    бургерная бургерная бургерная бургерная
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="reviews__items_item">
                                <div className="reviews__items_item_photo"></div>
                                <div className="reviews__items_item_rate">
                                    5 баллов
                                </div>
                                <div className="reviews__items_item_text">
                                    Самая лучшая бургерная бургерная бургерная
                                    бургерная бургерная бургерная бургерная
                                    бургерная бургерная бургерная бургерная
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="reviews__items_item">
                                <div className="reviews__items_item_photo"></div>
                                <div className="reviews__items_item_rate">
                                    5 баллов
                                </div>
                                <div className="reviews__items_item_text">
                                    Самая лучшая бургерная бургерная бургерная
                                    бургерная бургерная бургерная бургерная
                                    бургерная бургерная бургерная бургерная
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
            <div className="map">
                <YMaps>
                    <Map
                        width={"100%"}
                        height="400px"
                        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                    >
                        <Placemark
                            defaultGeometry={[55.750423, 37.595357]}
                            modules={["geoObject.addon.balloon"]}
                            properties={{
                                balloonContentBody:
                                    "Арбатская, д.23,строение 1",
                            }}
                        />
                    </Map>
                </YMaps>
            </div>
        </main>
    )
}
