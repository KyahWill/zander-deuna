import styles from '@/styles/navbar.module.css'
import { useState } from 'react'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <header className={styles.header}>
            <div
                className={styles.hamburger}
                onClick={() => setIsOpen(true)}
            >
                <hr className={styles.hrow}/>
                <hr className={styles.hrow}/>
                <hr className={styles.hrow}/>
            </div>
        </header>
        <div className={styles.navMenu} style={{position:"fixed", left: !isOpen? "-100svw": "0svw"}}>
            <div className={styles.navMenuTitle}>
                <h2> TEST NAV Menu</h2>
                <h2 onClick={() => {setIsOpen(false)}}  style={{position:"relative", right:"0px"}}>X </h2>
            </div>
            
        </div> 
    
    </>
}