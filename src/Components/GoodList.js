import { GoodItem } from "./GoodItem"
import { Nothing } from "./Nothing"
import { ShopContext } from "../context"
import { useContext } from "react"
const GoodList = ()=>{
    
    const {goods = []} = useContext(ShopContext)  

    if(!goods.length){
        return <Nothing />
    }
    return(
        <div className="goods">
            {goods.map((item) => {
                return <GoodItem key = {item.id} {...item}/>
            })}
        </div>
    )
}
export {GoodList}