import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navCont">
            <nav className="navbar">

                <Link className="navbarLogo"  to='/'><h1 >Tienda de CAFÉ</h1></Link>

                <Link className="navbarCart" to='/Shop'><h2 >🛒</h2></Link>

            </nav>
        </div>
    )
}

export default Navbar