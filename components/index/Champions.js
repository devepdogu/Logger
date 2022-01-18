import styles from './../../styles/Main.module.css'
import { GAME_PATH, BASE } from './../../utils/urls'
import Link from 'next/link'

export default function Champions({ result }) {
    return (
        <>
            {result.length > 0 && (
                <>
                    <h1>Champions</h1>
                    <div className='pl-1 mt-1 h-[250px]'>
                        <div className={styles.championArea}>
                            {
                                result.map((item, i) => (
                                    <a href={`${BASE}champion/${item[0].toLowerCase()}`} key={i} target="_blank" rel="noopener noreferrer">
                                        <img src={`${GAME_PATH}champion-icons/${item[1].key}.png`}></img>
                                        <div>
                                            <span>
                                                <small className='font-semibold'>{item[1].name} </small>
                                            </span>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </>
            )
            }
        </>

    )
}
