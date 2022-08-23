import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import { ItemDetailContainer } from "./ItemDetailContainer"
import Footer from "./Footer"
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cart } from "./Cart"

function App(){
    return (
            <ChakraProvider>
                <BrowserRouter>
                    <Header/>
                        <Routes>
                                <Route
                                    path="/" element={<ItemListContainer/>}
                                />
                                <Route
                                    path="/categoria/:categoria" element={<ItemListContainer/>}
                                />
                                <Route
                                    path="/producto/:id" element={<ItemDetailContainer/>}
                                />
                                <Route
                                    path="/categoria/:categoria/producto/:id" element={<ItemDetailContainer/>}
                                />
                                <Route
                                    path="/cart" element={<Cart/>}
                                />
                        </Routes>
                </BrowserRouter>

                <Footer/>

            </ChakraProvider>
    )
}

export default App