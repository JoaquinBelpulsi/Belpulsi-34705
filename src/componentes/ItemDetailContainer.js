import React from "react";
import { useState, useEffect } from "react";
import { CustomFetch } from "../productos/customFetch";
import { productos } from "../productos/productos";
import { ItemDetail } from "./ItemDetail"
import { Text } from "@chakra-ui/react"

const ItemDetailContainer = () => {

    const [listProduct, setlistProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        setLoading(true)
        CustomFetch(productos)
            .then(res => {
                setLoading(false)
                setlistProduct(res.find(Item => Item.id === 1))
            })
    }, [])

    return (
        <>
        <div id="landing-message">
            {!loading
            ?
            <ItemDetail listProduct = {listProduct}/>
            :
            <Text>Cargando...</Text>}
        </div>
        </>
    )
}

export { ItemDetailContainer }

