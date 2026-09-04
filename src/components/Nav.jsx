import { Link, useLocation } from 'react-router'
import styles from './Nav.module.css'

export function Nav () {
    const { pathname } = useLocation()
    return (
        <div className={styles.nav}>
            <Link to='/feria' className={ pathname === '/feria' ? styles.active : ''}>Feria Game</Link>
            <Link to='/carpet' className={ pathname === '/carpet' ? styles.active : ''}>Carpet Game</Link>
            <Link to='/' className={ pathname === '/' ? styles.active : ''}>Home</Link>
        </div>
    )
}