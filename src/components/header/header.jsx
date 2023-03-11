import './style.css';

const Header = () => {
    return (
        <div className="header-block">
            <div className="header-title-block">
                <div className="logo-block">
                    <a href='/' className="logo-img"></a>
                </div>
                <div className="nav-block">
                    <div className="nav-item">
                        Мероприятия 
                        <span className="down-icon"></span>
                    </div>
                    <a href="/" className="shop-icon"></a>
                    <a href="/" className="login-button">
                        Войти
                        <span className="user-icon"></span>
                    </a>
                </div>
            </div>
            <div className="header-content-block">
                <div className="content-menu">
                    <a href="/" className="content-item">Выставки</a>
                    <a href="/" className="content-item">Турниры</a>
                    <a href="/" className="content-item">Лекции</a>
                    <a href="/" className="content-item">Муз.Фестиваль</a>
                    <a href="/" className="content-item">Марафоны</a>
                    <a href="/" className="content-item">Экскурсии</a>
                    <a href="/" className="content-item">Варкшопы</a>
                </div>
                <div className="content-img">
                    
                </div>
            </div>
        </div>
    )
}

export default Header;