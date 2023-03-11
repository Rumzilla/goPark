import './style.css';

const Header = () => {
    return (
        <div className="header-block">
            <div className="logo-block">
                <a href='/' className="logo-img"></a>
            </div>
            <div className="nav-block">
                <div className="nav-item">
                    Категории 
                    <span className="down-icon"></span>
                </div>
                <a href="/" className="login-button">
                    Войти
                    <span className="user-icon"></span>
                </a>
            </div>
        </div>
    )
}

export default Header;