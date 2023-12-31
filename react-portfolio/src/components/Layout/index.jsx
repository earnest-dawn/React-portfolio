import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Project">The Resume</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/About">About me</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
