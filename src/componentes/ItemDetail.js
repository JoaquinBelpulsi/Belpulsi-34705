import { Center, VStack, Text, Button } from "@chakra-ui/react"
import { NavLink} from "react-router-dom"
import { useState } from "react"
import { ItemCount } from "./ItemCount"

const ItemDetail = (listProduct) => {

    const {nombre, precio, stock, descripcion, inicial} = listProduct

    const [isAdd, setIsAdd] = useState(false)

    const onAdd = () => {
        setIsAdd(true)
    }

    return (
        <Center>
            <VStack>
                <Text>{nombre}</Text>
                <Text>{precio}</Text>
                <Text>{descripcion}</Text>

            {
                isAdd ?
                <NavLink to="/cart">
                    <Button colorScheme="red" size='sm'>
                        Ir al carrito
                    </Button>
                </NavLink>
                :
                <ItemCount
                inicial={inicial} stock={stock} onAdd={onAdd}
                />
            }

            </VStack>
        </Center>
    )
}

export { ItemDetail }