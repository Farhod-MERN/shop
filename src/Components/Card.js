import { useContext } from "react"
import { ShopContext } from "../context"

const Card = ()=>{

    const {order ,handleisShow } = useContext(ShopContext)
    const quantity = order.length
    return(
        <div className = "card-shop  white-text" onClick={handleisShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span className = "card-quantity">{quantity}</span> : null}
        </div>
    )
}
export {Card}