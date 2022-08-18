import { Link } from "@chakra-ui/react";
import { VStack, Button,Text,Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
 
const Item = ({producto}) => {
    return(
        <VStack boxShadow='md' p='5' rounded='lg' bg='white' m='15px' boxSize='300px 300px'>
            <Image src={producto.image} alt={producto.nombre} w='200px'  />
            <Text>{producto.nombre}</Text>
            <Text>${producto.precio}</Text>

            <Button colorScheme="red" size='xs'>
                <NavLink to={'producto/${producto.id}'}>
                    <Link>Ver Detalle</Link>
                </NavLink>
            </Button>
        </VStack>
    )
}

export { Item }

