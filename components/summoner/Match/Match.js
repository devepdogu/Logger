import styles from './../../../styles/Summoner.module.css'
import dynamic from 'next/dynamic'

const Info = dynamic(() => import('./Info'));
const Kda = dynamic(() => import('./Kda'));
const Items = dynamic(() => import('./Items'));
const Participants = dynamic(() => import('./Participants'));
export default function Match({ match, router, index }) {
    let item = match.info.participants[index];

    return (
        <div className={styles.matchParent} >
            <div className={`${styles.match} flex justify-start items-center`}>
                <Info item={item} match={match}></Info>
                <Kda item={item}></Kda>
                <Items item={item}></Items>
                <Participants match={match} index={index} router={router}></Participants>
            </div>
        </div>
    )
}
