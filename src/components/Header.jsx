import { Link } from 'react-router-dom';
import "../style/components.css";

export default function Header(){
    return (
        <>
            <header className='headerBox'>
                <h1>Profile Card List</h1>
                
            </header>
            <nav className='navBar'>
                <Link to="/">Home</Link>
                <Link to="">Card List</Link>
                <Link to="/profile/profileForm">Make Card</Link>
            </nav>
        </>
    );
}