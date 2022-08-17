import React from "react";
import { useState, useEffect } from "react";
import { CustomFetch } from "../productos/customFetch";
import { productos } from "../productos/productos";
import { ItemDetail } from "./ItemDetail"

const ItemDetailContainer = () => {

    const [listProduct, setlistProduct] = useState({})

    useEffect (() => {
        CustomFetch(productos)
            .then(res => setlistProduct(res.find(Item => Item.id === 1)))
    }, [])

    return (
        <>
            <ItemDetail 
                listProduct={listProduct}
            />
        </>
    )
}

export { ItemDetailContainer }
