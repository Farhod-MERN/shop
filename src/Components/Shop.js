
import {useState, useEffect} from "react"
import{API_KEY, API_URL} from "../config"
import { Loader } from "./Loader"
import { GoodList } from "./GoodList"
import { Card } from "./Card"
import { BasketList } from "./BasketList"
import {toast} from "react-toastify"

const Shop = ()=>{
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isShow, setisShow] = useState(false)

    function handleisShow(){
        setisShow(!isShow)
    }

    function handleBackShow(e){
        if(e.target.getAttribute("data-close") === ""){
            setisShow(!isShow)
        }  
    }

    function removeFromBasket(itemID){
       const newOrder = order.filter((item)=>{
        return item.id !== itemID   // biz bosgan o'yinchoqdan boshqa hammasini yangiOrderga qaytarib beradi
       })
       setOrder(newOrder)
       toast.error("Removed item !")
    }
    function incrementQuantity(itemID){
        
      const newOrder = order.map(item => { 
        
                    if(item.id === itemID){
                        const newQuantity = item.quantity + 1
                        return{
                            ...item,
                            quantity : newQuantity
                        }
                    } else{
                        return item
                    }
        })
      setOrder(newOrder)  
      toast.info('You added 1 item!');
    }
    function decrementQuantity(itemID){
        
      const newOrder = order.map(item => { 
        
                    if(item.id === itemID){
                        const newQuantity = item.quantity - 1
                        return{
                            ...item,
                            quantity : newQuantity <= 0 ? 0 : newQuantity
                        }
                    } else{
                        return item
                    }
        })
      setOrder(newOrder)  
        
      toast.warn('Removed 1 item!');
    }

    //fortnite.io ning shart desa ham bo'laid, headersga Authorization yozish shart
            //fetchning 1- parametri ga Link yoziladi, 2-object, unda biz fetchni boshqara olamiz

    const addtoBacket = (item)=>{
        //itemIndex = biz qaysini o'yinchoqni bossak o'shani idsi
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
        //agar o'yinchoq ustiga 1-bosilish  bo'lsa uning quantity sini 1 ga tengla
        if(itemIndex < 0){
            //item - har bir o'yinchoq, barcha dalnilari, object ko'rinishida
            //newItem bu - itemga Miqdor qo'shib olish uchungina holos
        const newItem = {
            ...item ,
            quantity : 1,
           }
           setOrder([...order, newItem])

        }else{ //agar o'yinchoq ustiga yana bosilsa
            const newOrder = order.map((orderItem, index)=>{
                //agar o'yinchoqqa yana bosilsa 
                // va orderni ichida shu o'yinchoq bo'lsa, uni quantitysiga 1 ni qo'shib qo'y
                
                if(index ===itemIndex){
                    return {
                        ...orderItem,
                        quantity : orderItem.quantity + 1
                    }
                }else{
                    return orderItem // agar orderItemni o'zini qaytaradi , lekin uning miqdori o'zgarmaydi
                }
            })
            setOrder(newOrder)
        }
        toast.success('Successfully added!');
    }        

    useEffect(()=>{
        fetch(API_URL ,{
            headers : {
                'Authorization' : API_KEY
            } 
        }).then((response) => response.json()).then((data)=> {
            setGoods(data.featured)
            setLoading(false) //serverdan malumot kelgach loading o'chadi
        } )
        // bizda data juda katta malumot bor, bizga esa undan featured degan massiv kerak holos
    }, [])
    return(
        <div className="wrapper-item">
            <div className="container content">
            <Card quantity = {order.length} handleisShow = {handleisShow}/> 
            {
                loading 
                ? <div><Loader />
                <div><h5 className = "center">Loading ⌛</h5></div>
                </div> 
                : <GoodList goods = {goods} addtoBacket = {addtoBacket}/>
            }
            {
                isShow && <BasketList removeFromBasket = {removeFromBasket} order ={order} handleisShow = {handleisShow} handleBackShow = {handleBackShow}  decrementQuantity = {decrementQuantity} incrementQuantity = {incrementQuantity}/> 
            }
        </div>
        </div>
        
    )
}
export {Shop}
