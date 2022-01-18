import styles from '../../styles/Champion.module.css'
import Difficulty from './Info/Difficulty'
import Roles from './Info/Roles'
export default function Info({ champion, calculatedColor }) {

    return (
        <div className={styles.main2}>
            <div className={styles.card}>
                <h1>{champion.name}</h1>
                <h2 style={{ color: calculatedColor }}>{champion.title}</h2>
                <div className={styles.cardDetail}>
                    <div className={styles.cardRoles}>
                        <Roles roles={champion.roles}></Roles>
                        <Difficulty champion={champion}></Difficulty>
                    </div>

                    <div className={styles.heroDetail}>
                        <p className='p-0'>
                            {champion.shortBio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}