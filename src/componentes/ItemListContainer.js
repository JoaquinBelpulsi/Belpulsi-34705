import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import { productos } from "../productos/productos";
import { CustomFetch } from "../productos/customFetch";
import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom"

const ItemListContainer = ( greeting )=>{

    const  [listaProductos,setListaProductos]=useState([])
    const [loading,setLoading]=useState(true)

    const { categoria }= useParams()

    useEffect(()=>{
        setLoading(true)
        CustomFetch(productos)
            .then(res => {
                if (categoria) {
                    setLoading(false)
                    setListaProductos(res.filter(prod => prod.categoria === categoria))
                } else {
                    setLoading(false)
                    setListaProductos(res)
                }
            })
    },[categoria])

    return(

        <div id="landing-message">
            {!loading
            ?
            <ItemList listaProductos = {listaProductos}/>
            :
            <Text>Cargando...</Text>}
            {greeting.greeting}
        </div>
        
    )
}
export default ItemListContainer