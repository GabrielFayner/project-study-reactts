import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/' className={styles.link}>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/moduleOneThree' className={styles.link}>Módulo 1 ao 3</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/module' className={styles.link}>Módulo ...</Link>
                </li>
            </ul>
      </div>
    )
}

export default Navbar;