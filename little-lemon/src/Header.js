import logo from './logo.png'
import Nav from './Nav';

function Header () {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" class="logo"/>
            <Nav></Nav>
        </header>
    )
}

export default Header;