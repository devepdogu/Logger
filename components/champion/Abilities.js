import { CHAR_PATH } from '../../utils/urls'
import React, { useState } from 'react'
import styles from '../../styles/Champion.module.css'
import AbilityImage from './Abilities/AbilityImage';
import AbilityInfo from './Abilities/AbilityInfo';
import AbilityVideo from './Abilities/AbilityVideo';

export default function Abilities({ champion, calculatedColor }) {
    const [activeAbility, setActiveAbility] = useState("p");

    return (
        <div className={styles.championAbility}>
            <h1>ABILITIES</h1>
            <div className={styles.abilitiesArea}>
                <div className={styles.abilities}>
                    <div className={styles.abilitiesList}>
                        {champion.spells.map((spell, i) => (
                            <AbilityImage
                                key={i}
                                activeAbility={activeAbility}
                                setActiveAbility={setActiveAbility}
                                calculatedColor={calculatedColor}
                                spell={spell}
                                src={`${CHAR_PATH}/${champion.alias.toLowerCase()}/hud/icons2d/${spell.abilityIconPath.split("/").splice(-1)[0].toLowerCase()}`}></AbilityImage>
                        ))}
                    </div>
                    <div className={styles.abilitiesDetail}>

                        {champion.spells.map((spell, i) => (
                            <AbilityInfo
                                activeAbility={activeAbility}
                                key={i} spell={spell}>
                            </AbilityInfo>
                        ))}
                    </div>
                </div>
                <div className={styles.abilityPreview}>

                    {champion.spells.map((spell, i) => (
                        <AbilityVideo
                            activeAbility={activeAbility}
                            key={i} spell={spell}
                            src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${"0".repeat(4 - champion.id.toString().length)}${champion.id}/ability_${"0".repeat(4 - champion.id.toString().length)}${champion.id}_${spell.spellKey.toUpperCase()}1.mp4`}
                        >
                        </AbilityVideo>
                    ))}
                </div>
            </div>
        </div >
    )
}