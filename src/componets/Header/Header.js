import {useNavigate} from "react-router";

import css from './Header.module.css'

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={css.header}>
            <div className={css.btn}>
                <button onClick={() => navigate('/login')}>Log In</button>
                <button onClick={() => navigate('/register')}>Register</button>

            </div>
        </div>

    );
}

export {Header}