import Logo from "./multimedia/inicio/logo.png"

const CartWidget = (parametros) => {
        if(parametros.type === "header"){
            return (
            <img src={Logo} alt="Logo" className="h-logo"/>
            )
        }
        else if(parametros.type === "footer"){
            return (
            <img src={Logo} alt="Logo" className="f-logo"/>
            )
        }
}

export default CartWidget