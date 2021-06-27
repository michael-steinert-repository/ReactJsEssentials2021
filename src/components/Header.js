import {useLocation} from 'react-router-dom';
import Button from './Button';

const Header = ({title, showAddTask, showAdd}) => {
    const location = useLocation();
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname=== "/" &&
            <Button
                showAddTask={showAddTask}
                text={showAdd ? "Close" : "Add"}
            />}
        </header>
    );
}

Header.defaultProps = {
    title: 'ReactJS Essentials 2021'
}

export default Header;