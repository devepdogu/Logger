import styles from './../../styles/Summoner.module.css'
import React from 'react';


export default function League({ league }) {
    return (
        <div className={`${styles.areaHeaderLeague}  items-center justify-center ${league.length === 0 ? 'hidden' : 'flex'} flex-col`}>
            {league.map((item, i) => (
                <React.Fragment key={i}>
                    {
                        typeof item?.tier !== "undefined" && (
                            <div className={`${styles.areaHeaderLeagueItem} flex items-center justify-start bg-[#41729F] p-e[10px]`} key={i + 1}>
                                <img src={`/assets/img/${item.tier.toLowerCase()}_baseface_matte.png`}></img>
                                <div className='flex  justify-center flex-col ml-2 pt-2'>
                                    <span className="block font-bold text-[#274472]">
                                        {item.queueType}
                                    </span>
                                    <span className={`text-[#274472] `}>
                                        {item.tier}
                                    </span>
                                </div>
                                <div className={styles.areaHeaderLeagueRate} data-detail={`Win:${item.wins} - Losses:${item.losses}`}>
                                    <div className='relative'>
                                        %{((item.wins / (item.wins + item.losses)) * 100).toFixed(0)}
                                    </div>
                                </div>
                            </div>
                        ) || (
                            <div className={`${styles.areaHeaderLeagueItem} flex items-center justify-start bg-[#41729F] p-e[10px]`} key={0}>
                                <img src={`/assets/img/tft.png`}></img>
                                <div className='flex  justify-center flex-col ml-2'>
                                    <span className="block font-bold text-[#274472]">
                                        {item.queueType}
                                    </span>

                                </div>
                            </div>
                        )
                    }
                </React.Fragment>
            ))}
        </div>
    )
}
