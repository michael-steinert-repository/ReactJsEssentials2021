import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <p>Task Tracker</p>
            <Link to="/about">About</Link>
        </footer>
    );
}

export default Footer;