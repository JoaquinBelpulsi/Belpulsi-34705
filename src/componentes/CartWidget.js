import { NavLink } from "react-router-dom"

const CartWidget = () => {
    return (
        <NavLink to="/cart" >
            <span class="material-symbols-outlined">
                shopping_cart
            </span>
        </NavLink>
    )
}

export { CartWidget }