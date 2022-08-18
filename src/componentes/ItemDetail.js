import ItemCount from "./ItemCount"

const ItemDetail = (listProduct) => {
    const {nombre, precio} = listProduct
    return (
        <>
            <div>{nombre}</div>
            <div>{precio}</div>
            <ItemCount/>
        </>
    )
}

export { ItemDetail }