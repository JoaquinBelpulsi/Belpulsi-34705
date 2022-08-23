import {useState} from "react";
import { HStack, Button, Text } from "@chakra-ui/react";

const ItemCount = ({inicial, stock, onAdd}) => {

    const [count, setCount] = useState(inicial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > inicial && setCount(count - 1)
    
    return (
        <HStack>
            <Button variant='ghost' colorScheme="red" size='sm' onClick={decrease}>-</Button>
            <Text>{count}</Text>
            <Button variant='ghost' colorScheme="red" size='sm' onClick={increase}>+</Button>
            <Button colorScheme="red" size='sm' onClick={onAdd}>Agregar al carrito</Button>
        </HStack>
    )
}
export { ItemCount }
