import React from "react"
import { useState } from "react"


const Contador = 0

const Aumentar = () => {
    const [Contador, setContador] = useState(0);
    setContador(Contador + 1)
}

const ItemCount = (parametros) => {

    if(parametros.type === "botones"){
        return (
            <>
                <p>El contador va : {Contador}</p>
                <button onClick={Aumentar()} class="btn">Disminuir</button>
                <button onClick={Aumentar()} class="btn">Hola</button>
                <button onClick={Aumentar()} class="btn">Aumentar</button>
            </>
        )
    }
}

export default ItemCount
