import { HStack, Spacer, Link } from "@chakra-ui/react"
import { NavLink} from "react-router-dom"
function NavBar() {
    return (
        <HStack>

            <NavLink to="/">
                <span class="material-symbols-outlined">
                    home
                </span>
            </NavLink>

            <Spacer />

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

        </HStack>

    </HStack>
)
}

export default NavBar