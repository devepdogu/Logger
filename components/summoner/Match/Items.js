import styles from './../../../styles/Summoner.module.css'


export default function Items({ item }) {
    return (
        <div className={`${styles.items} mr-5 flex flex-wrap items-center justify-center`}>
            {[...Array(7).keys()].map((k, i) => {
                {
                    return item["item" + k] != 0 && (
                        <img key={i} src={`https://blitz-cdn.blitz.gg/blitz/lol/item/${item["item" + k]}.webp`}></img>
                    )
                }
            })}
        </div>
    )
}
