import logo from "../logo.svg"

function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="logo" className="nav-icon" />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course Project 1</h4>
            </nav>
        </header>
    )
}

export default Header