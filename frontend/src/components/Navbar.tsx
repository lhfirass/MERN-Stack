import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <Link to="/">
                <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>Home</span>
            </Link>
            <Link to="/about">
                <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>About</span>
            </Link>
        </nav>
    );
}

export default Navbar;