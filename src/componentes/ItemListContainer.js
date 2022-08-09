import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import { productos } from "../productos/productos";
import { CustomFetch } from "../productos/customFetch";
import { Text } from "@chakra-ui/react";

const ItemListContainer = (greeting)=>{
    const  [listaProductos,setListaProductos]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        setLoading(true)
        CustomFetch(productos)
            .then(res => {
                setLoading(false)
                setListaProductos(res)})
    },[])
    return(
        <div id="landing-message">
            {!loading
            ?
            <ItemList listaProductos = {listaProductos}/>
            :
            <Text>Cargando...</Text>}
            {greeting.greeting}
            {/* <ItemCount stock={10} initial={0} onAdd=""/> */}
        </div>
        
    )
}
export default ItemListContainer