import { Link } from 'react-router-dom'

export function HomePage() {
    return (
        <div>
            <Link to="/feria">Feria Game</Link>
            <Link to="/carpet">Carpet Game</Link>
        </div>
    )
}