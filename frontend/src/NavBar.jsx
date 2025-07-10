import Link from 'react-router-dom'

export default function NavBar(){
    return (
        <nav>
            <ul>
                <li><Link to='/post'>Post</Link></li>
            </ul>
        </nav>
    )
}