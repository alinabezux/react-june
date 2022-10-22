import css from './Header.module.css'
import {useSelector} from "react-redux";

const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer);

    return (
        <div className={css.header}>
            {
                currentUser && currentUser.name
            }
        </div>
    );
}

export {Header}