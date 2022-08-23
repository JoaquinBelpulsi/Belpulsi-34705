import { HStack, Spacer, Link } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { LogoC } from "./Logo"
import { CartWidget } from "./CartWidget"

function NavBar() {
    return (
        <HStack>

            <LogoC
                type = "header"
            />

            <NavLink to="/">
                <span class="material-symbols-outlined">
                    home
                </span>
            </NavLink>

            <HStack>

                <NavLink to="categoria/sahumerios">
                    <Link>Sahumerios</Link>
                </NavLink>

                <NavLink to="categoria/velas">
                    <Link>Velas</Link>
                </NavLink>

                <NavLink to="categoria/pastillas">
                    <Link>Pastillas</Link>
                </NavLink>

                <Spacer/>

                <CartWidget/>
            </HStack>

    </HStack>
)
}

export default NavBar