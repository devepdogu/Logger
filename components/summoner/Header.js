import styles from './../../styles/Summoner.module.css'


export default function Header({ data }) {
    return (
        <div className={`${styles.areaHeaderLevel} `} >
            <img src="/assets/img/border.png" className={styles.areaHeaderLevelBorder}></img>
            <img className={styles.areaHeaderLevelIcon} src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${data.profileIconId}.jpg`}></img>
            <span className={styles.areaHeaderLevelText}>{data.summonerLevel}</span>
        </div>
    )
}
