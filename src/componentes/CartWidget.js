import Logo from "./multimedia/inicio/logo.png"

const CartWidget = (parametros) => {
        if(parametros.type === "header"){
            return (
            <img src={Logo} alt="Logo" Class="h-logo"/>
            )
        }
        else if(parametros.type === "footer"){
            return (
            <img src={Logo} alt="Logo" Class="f-logo"/>
            )
        }
}

// function CartWidget() {
//     return (
//         <>
//         <div>
//             <img src={Logo} alt="Logo" class="logo"/>
//         </div>
//         </>
//     )
    
// }

export default CartWidget