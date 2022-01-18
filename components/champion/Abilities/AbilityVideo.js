import styles from './../../../styles/Champion.module.css'

export default function AbilityVideo({ activeAbility, spell, src }) {
    return (
        <div className={`${styles.abilityPreviewDiv} ${activeAbility === spell.spellKey ? styles.activePreview : ''}`}>
            <video preload="true" playsInline loop muted autoPlay>
                <source src={src} type="video/mp4">
                </source>
            </video>
        </div>
    )
}