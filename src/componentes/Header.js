import CartWidget from "./CartWidget"
import NavBar from "./NavBar"

function Header () {
    return (
        <header>
            <CartWidget
                type = "header"
            />
            <NavBar/>
        </header>
    )
}

export default Header