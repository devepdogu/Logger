import styles from './../../../styles/Champion.module.css'


export default function Difficulty({ champion }) {
    return (
        <div className={styles.cardDiff}>
            <div className={styles.cardDiffParent}>
                <div className={styles.cardDifficulty}>
                    <div className={`${champion.tacticalInfo.difficulty > 0 ? styles.cardDiffFull : ''}`}></div>
                    <div className={`${champion.tacticalInfo.difficulty > 1 ? styles.cardDiffFull : ''}`}></div>
                    <div className={`${champion.tacticalInfo.difficulty > 2 ? styles.cardDiffFull : ''}`}></div>
                </div>
            </div>
            <span className='text-white'>DIFFICULTY</span>
            <span>
                {champion.tacticalInfo.difficulty > 0 && champion.tacticalInfo.difficulty < 2 && 'EASY'}
                {champion.tacticalInfo.difficulty > 1 && champion.tacticalInfo.difficulty < 3 && 'MEDIUM'}
                {champion.tacticalInfo.difficulty > 2 && 'HIGH'}
            </span>
        </div>
    )
}