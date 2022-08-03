import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import Footer from "./Footer"
// import { useState } from "react"
// import ItemCount from "./ItemCount"

function App(){

    // const [contador, setContador] = useState(0)
    // const aumentar = () => {
    //     setContador(contador + 1)
    // }


    return (
        <>
            <Header/>
            <ItemListContainer/>
            <Footer/>
        </>
    )
}

export default App