import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import { ItemDetailContainer } from "./ItemDetailContainer"
import Footer from "./Footer"
import { ChakraProvider } from '@chakra-ui/react'

function App(){
    return (
            <ChakraProvider>

            <Header/>
                <ItemListContainer/>
                <ItemDetailContainer/>
            <Footer/>

            </ChakraProvider>
    )
}

export default App