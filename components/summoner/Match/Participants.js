import styles from './../../../styles/Summoner.module.css'
import { BASE, GAME_PATH } from './../../../utils/urls'


export default function Participants({ match, index, router }) {
    return (
        <div className={`${styles.participants}`}>
            {
                [...Array(match.metadata.participants.length).keys()].map((summoner, i) => {
                    const currentSummoner = match.info.participants[summoner];
                    return (
                        <a key={i} style={{ flexDirection: i % 2 == 1 ? 'row-reverse' : 'row' }} className={`${styles.summoner} ${i === index ? styles.activeSummoner : ''}`}
                            href={`${BASE}summoner/${router.query.region}/${(currentSummoner.summonerName)}`} target="_blank" rel="noopener noreferrer">
                            <span>{currentSummoner.summonerName}</span>
                            <img src={`${GAME_PATH}champion-icons/${currentSummoner.championId}.png`}></img>
                        </a>
                    )
                })
            }
        </div>
    )
}
