import { Swiper, SwiperSlide } from 'swiper/react';
import { GAME_PATH } from '../../utils/urls'

import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/Champion.module.css'
import 'swiper/css';
export default function Skins({ champion }) {
    const [activeSkin, setActiveSkin] = useState(0);

    return (
        <div className={styles.championSkins}>
            <div className={styles.skins}>
                <Swiper
                    onSlideChange={(e) => setActiveSkin(e.activeIndex)}
                    slidesPerView={2} centeredSlides={true} spaceBetween={30} mousewheel={true}>

                    {champion.skins.map((skin, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                src={`${GAME_PATH}${skin.uncenteredSplashPath.split("/").splice(-4).join("/")}`}
                                className={styles.swiperImg}
                                layout="fill" objectFit='contain' priority={true}>
                            </Image>

                            <div>
                                {skin.name}
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
            <div className={`absolute w-[100%] h-[90vh] top-0 left-0 overflow-hidden ${styles.imagePare}`}>
                <Image
                    className={styles.imgBackDrop} src={`${GAME_PATH}${champion.skins[activeSkin].uncenteredSplashPath.split("/").splice(-4).join("/")}`}
                    layout="fill" objectFit="cover" priority={true}>
                </Image>
            </div>

            <div className={styles.backdrop}></div>

        </div>
    )
}