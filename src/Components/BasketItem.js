import { useContext } from "react"
import { ShopContext } from "../context"
const BasketItem = (props)=>{
    const {incrementQuantity, decrementQuantity, removeFromBasket} = useContext(ShopContext)
    const {id, name, price, quantity, full_background,} = props
    return(
        <li key={id} className="collection-item basket-item">
         <div className="basket-left">
            <img className="basket-inner-img" src={full_background} alt="" />{name}, {price}$, <b>x {quantity}</b>, All: {price * quantity}
         </div>
            <div className="basket-right">
            <span className="secondary-content" onClick={()=>{incrementQuantity(id)}}>
                <i className="material-icons btn-basket-list">exposure_plus_1</i>
            </span>

            <span className="secondary-content" onClick={()=>{decrementQuantity(id)}}>
                <i className="material-icons btn-basket-list">exposure_neg_1</i>
            </span>

            <span className="secondary-content btn-basket-list" onClick={()=>{removeFromBasket(id)}}>
                <i className="material-icons">delete_forever</i>
            </span>
            </div>
        </li>
    )
}
export {BasketItem}
