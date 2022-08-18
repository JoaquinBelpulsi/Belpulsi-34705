import React from "react";
import { useState } from "react";

const ItemCount =(props)=>{
    const stockValor = (props.stock)
    const [contador,setContador] = useState(props.inicial)
    const aumentarContador=()=>{
        if(contador>=stockValor){    
            console.log("El contador es o sera mayor que el stock")
        }
        else{
            setContador(contador + 1)
        }
    }


    const disminuirContador=()=>{
        if(contador === 0){
            console.log("El contador sera menor que el stock")
        }
        else{
            setContador(contador - 1)
        }
    }
    
    return (
        <>
            <div>
                <button class="btn" onClick={disminuirContador}>-1</button>
                <button class="btn" onClick={aumentarContador}>+1</button>
                <button class="btn" >Añadir al carrito</button>
            </div>
        </>
    )
}
export default ItemCount
