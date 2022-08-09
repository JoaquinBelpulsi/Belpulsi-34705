import ItemCount from "./ItemCount"

function ItemListContainer(){
    return (
        <>
        <div>
            <h1>Sana Aromas</h1>
        </div>
        <ItemCount
            stock={100} inicial={0} onAdd=""
        />
        </>
    )
}

export default ItemListContainer