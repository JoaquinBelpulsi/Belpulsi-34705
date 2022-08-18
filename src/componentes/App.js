import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import { ItemDetailContainer } from "./ItemDetailContainer"
import Footer from "./Footer"
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(){
    return (
            <ChakraProvider>
                <BrowserRouter>
                    <Header/>
                        <Routes>
                                <Route
                                    path="/" element={<ItemListContainer getting="Bienvenidos a mi pagina"/>}
                                />
                                <Route
                                    path="/categoria/:categoria" element={<ItemListContainer getting="Bienvenidos a mi Tienda"/>}
                                />
                                <Route
                                    path="/productos/:id" element={<ItemDetailContainer/>}
                                />
                        </Routes>
                </BrowserRouter>

                <Footer/>

            </ChakraProvider>
    )
}

export default App