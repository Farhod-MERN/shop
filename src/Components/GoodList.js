import { GoodItem } from "./GoodItem"
import { Nothing } from "./Nothing"

const GoodList = (props)=>{
    
    const {goods = [], addtoBacket} = props  

    if(!goods.length){
        return <Nothing />
    }
    return(
        <div className="goods">
            {goods.map((item) => {
                return <GoodItem key = {item.id} {...item} addtoBacket = {addtoBacket}/>
            })}
        </div>
    )
}
export {GoodList}