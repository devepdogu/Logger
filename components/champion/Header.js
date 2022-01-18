import styles from '../../styles/Champion.module.css'
import Image from 'next/image'

export default function Header({ imgSrc, CalculatedColor }) {
    return (
        <>
            <div className={styles.preview} >
                <div style={{ position: "relative" }}>
                    <Image
                        className={`${styles.imgContainer}`} src={imgSrc}
                        width="100%" height="100%" layout="responsive" objectFit="contain">
                    </Image>
                </div>

                <div className={`${styles.containerCor}`} style={{ background: `linear-gradient(360deg,${CalculatedColor} 8%,transparent 25%)` }}></div>
            </div>
            <div className={styles.main}>
                <img src={imgSrc}></img>
            </div>

        </>
    )
}