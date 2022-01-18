import styles from './../../../styles/Champion.module.css'

export default function AbilityInfo({ activeAbility, spell }) {
    return (
        <div className={`${styles.abilitiesDetailExp} ${activeAbility === spell.spellKey ? styles.activeDetail : ''}`}>
            <small>{spell.spellKeyLong ? spell.spellKeyLong : spell.spellKey}</small>
            <h2>{spell.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: spell.description }}></p>
        </div>
    )
}