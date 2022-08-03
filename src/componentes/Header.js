import CartWidget from "./CartWidget"
import NavBar from "./NavBar"
import ItemCount from "./ItemCount"

const Header = () => {
    return (
        <header>
            <CartWidget
                type = "header"
            />
            <NavBar/>
            <ItemCount
                type= "botones"
                
            />
        </header>
    )
}

export default Header