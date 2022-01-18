import styles from './../../styles/Main.module.css'
import { regions } from './../../utils/riot_api'
export default function Regions({ activeRegions, setActiveRegions }) {


    return (
        <div className={styles.locationArea}>
            <span>{regions.find((x) => x.short === activeRegions).long}</span>
            <div className={styles.locationMore}>
                <div className={styles.locationMoreD}>
                    <div>
                        <ul className={styles.locationUl}>
                            {
                                regions.map((item, i) => (
                                    <li key={i} className={`${activeRegions === item.short ? styles.activeTab : ''}`} onClick={() => setActiveRegions(item.short)}>
                                        <span> {item.long}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
