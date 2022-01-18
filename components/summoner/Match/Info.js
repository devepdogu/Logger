import styles from './../../../styles/Summoner.module.css'
import { GAME_PATH, BASE } from './../../../utils/urls'
import { spells } from './../../../utils/riot_api';



export default function Info({ item, match }) {
    let date = new Date(match.info.gameCreation);

    return (
        <>
            <div className='flex flex-col relative'>
                <a href={`${BASE}champion/${item.championName}`} target="_blank" rel="noopener noreferrer">
                    <img src={`${GAME_PATH}champion-icons/${item.championId}.png`}></img>
                </a>
                <div className={`${styles.spells} flex`}>
                    <img src={spells.filter((spell) => spell.key == item.summoner1Id)[0].icon}></img>
                    <img src={spells.filter((spell) => spell.key == item.summoner2Id)[0].icon}></img>
                </div>
            </div>

            <div className={`flex flex-col ml-5 ${styles.matchInfo}`}>
                <h3 style={{ color: (item.win ? '#3CBC8D' : '#E9422E') }} className={`m-0`}>{item.win ? 'Win' : 'Lose'}</h3>
                <span>
                    <small>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</small>
                </span>
                <span>
                    <small><b>{Math.floor(match.info.gameDuration / 60)}</b> min</small>
                    <small className='ml-2'><b>{Math.floor(match.info.gameDuration - (Math.floor(match.info.gameDuration / 60) * 60))}</b> sec</small>
                </span>
            </div>
        </>

    )
}
