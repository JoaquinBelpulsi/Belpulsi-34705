import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import Footer from "./Footer"
import { ChakraProvider } from '@chakra-ui/react'

function App(){
    return (
            <ChakraProvider>

            <Header/>
                <ItemListContainer/>
            <Footer/>

            </ChakraProvider>
    )
}

export default App