const Card = (props)=>{
    const {quantity = 0, handleisShow = Function.prototype } = props
    //Function.prototype = biz propsdan olgan narsamiz funksiya ekanligini aytib qo'ydik
    return(
        <div className = "card-shop  white-text" onClick={handleisShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span className = "card-quantity">{quantity}</span> : null}
        </div>
    )
}
export {Card}