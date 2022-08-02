const CartWidget = (Logo) => {
        if(Logo.type == "header"){
            return (
            <img src="" alt="Logo" ClassName="logo-header"/>
            )
        }
        else if(Logo.type == "footer"){
            return (
            <img src="" alt="Logo" ClassName="logo-footer"/>
            )
        }
}

export default CartWidget