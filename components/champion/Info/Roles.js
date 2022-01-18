import styles from './../../../styles/Champion.module.css'
import { ICON_PATH } from './../../../utils/urls'

export default function Roles({ roles }) {
    const activeRoles = [
        {
            name: "assassin",
            img: `${ICON_PATH}npe-ft-role-icon-assassin.png`
        },
        {
            name: "fighter",
            img: `${ICON_PATH}npe-ft-role-icon-fighter.png`
        },
        {
            name: "mage",
            img: `${ICON_PATH}npe-ft-role-icon-mage.png`
        },
        {
            name: "marksman",
            img: `${ICON_PATH}npe-ft-role-icon-marksman.png`
        },
        {
            name: "support",
            img: `${ICON_PATH}npe-ft-role-icon-support.png`
        },
        {
            name: "tank",
            img: `${ICON_PATH}npe-ft-role-icon-tank.png`
        }
    ]
    return (
        <>
            {roles.map((item, i) => (
                <div key={i} className={styles.cardRole}>
                    <img src={activeRoles.filter((k) => k.name === item)[0].img}>
                    </img>
                    <span className='text-white'>ROLE</span>
                    <span>{item}</span>
                </div>
            ))}</>
    )
}