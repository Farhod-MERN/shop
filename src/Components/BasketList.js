import { BasketItem } from "./BasketItem"
import { useContext } from "react"
import { ShopContext } from "../context"

const BasketList = ()=>{
    const {order = [], handleBackShow = Function.prototype, handleisShow} = useContext(ShopContext)
    const totalPrice = order.reduce((sum, element) =>{
        return sum + element.price * element.quantity
    }, 0) 


return(
    <div className="bsk" data-close = "" onClick={handleBackShow}>
        <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>
    {
        order.length ? order.map(item =>{
            return (
                <BasketItem key = {item.id} {...item}/>
            )
        } ) : <li className="collection-item"><img className="empty-basket" src="https://i.pinimg.com/564x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg" alt="Basket is empty 😔"/></li>
    }
        <li className="collection-item active">Total Price : {totalPrice} </li>
        <li className = "material-icons basket-close" onClick = {handleisShow} >close</li>
    </ul>
    </div>
)
}
export {BasketList}