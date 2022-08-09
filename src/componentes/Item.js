import React from "react";
import { Link } from "@chakra-ui/react";
import { VStack, Button,Text,Image } from "@chakra-ui/react";

const Item = ({producto}) => {
    console.log(producto)
    return(
        <VStack boxShadow='md' p='5' rounded='lg' bg='white' m='15px' boxSize='300px 300px'>
            <Image src={producto.image} alt={producto.nombre} w='200px'  />
            <Text>{producto.nombre}</Text>
            <Text>${producto.precio}</Text>
            <Button colorScheme="red" size='xs'>
                <Link>Ver Detalle</Link>
            </Button>
        </VStack>
    )
}

export default Item
