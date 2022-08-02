import CartWidget from "./CartWidget"
import NavBar from "./NavBar"

const Header = ({contador}) => {
    return (
        <header>
            <p>El contador va : {contador}</p>
            <CartWidget 
                type="header"
            />
            <NavBar/>
        </header>
    )
}

export default Header