import styles from './../../../styles/Champion.module.css'

export default function AbilityImage({ activeAbility, setActiveAbility, src, calculatedColor, spell }) {
    return (
        <div className={styles.ability} >
            <div className={`${styles.abilityBegin} ${activeAbility === spell.spellKey ? styles.activeAbility : ''}`} onClick={() => setActiveAbility(spell.spellKey)}>
                <img src={src}></img>
                <span className={styles.abilityCircle} style={{ borderColor: calculatedColor }}></span>
            </div>
        </div>
    )
}