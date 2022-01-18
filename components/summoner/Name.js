import styles from './../../styles/Summoner.module.css'


export default function Header({ data }) {
    return (
        <div className={styles.areaSummoner}>
            <h1>{data.name}</h1>
        </div>

    )
}
