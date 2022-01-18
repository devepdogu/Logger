import styles from './../../styles/Summoner.module.css'

import dynamic from 'next/dynamic'
const Match = dynamic(() => import('./Match/Match'));

export default function Matches({ matches, puid, router }) {
    return (
        <div className={`${styles.areaMatches} mt-[40px]`}>
            {
                matches.map((match, i) => {
                    let index = match.metadata.participants.findIndex((k) => k === puid);
                    return (
                        <Match key={i} match={match} index={index} router={router}></Match>
                    )
                })
            }

        </div>

    )
}
