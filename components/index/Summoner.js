import { GAME_PATH, BASE } from './../../utils/urls'
import styles from './../../styles/Main.module.css'
import Link from 'next/link'

export default function Summoner({ search, activeRegions }) {
    return (
        <>
            <h1 className='mt-3'>Summoner</h1>
            <div className='mt-1'>
                <a href={`${BASE}summoner/${activeRegions.toLowerCase()}/${(search)}`} className={styles.summoner}>
                    <img src={`${GAME_PATH}champion-icons/-1.png`}></img>
                    <div>
                        <span>
                            <p className='m-0 font-semibold pl-4'>{search}</p>
                        </span>
                    </div>
                </a>
            </div></>
    )
}
