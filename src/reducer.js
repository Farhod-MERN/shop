import { toast } from "react-toastify"

export function reducer(state, {type, payload}){
    switch(type){

        case "ADD_TO_BASKET" : {
            const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id)
           //payload = bizning orderdagi item(o'yinchog'imiz)
           
           let newOrder = null    
     
           if(itemIndex < 0){            
            const newItem = {
                ...payload ,
                quantity : 1,
               }
               newOrder = [...state.order, newItem]
    
            }else{ 
                newOrder = state.order.map((orderItem, index)=>{
                    if(index ===itemIndex){
                        return {
                            ...orderItem,
                            quantity : orderItem.quantity + 1
                        }
                    }else{
                        return orderItem 
                    }
                })
    
            }

            toast.success('Successfully added!');
            return {
                ...state, 
                order : newOrder
            }
        } 
        
        case "INCREMENT_QUANTITY" : {
            toast.info('You added 1 item!'); 
            return {
                ...state,
                order: state.order.map(item => { 
        
                    if(item.id === payload.id){
                        const newQuantity = item.quantity + 1
                        return{
                            ...item,
                            quantity : newQuantity
                        }
                    } else{
                        return item
                    }
                })
            }
        }

        case "DECREMENT_QUANTITY" : {
          toast.warn('Removed 1 item!');
          return {
                ...state,
                order : state.order.map(item => { 
        
                    if(item.id === payload.id){
                        const newQuantity = item.quantity - 1
                        return{
                            ...item,
                            quantity : newQuantity <= 0 ? 0 : newQuantity
                        }
                    } else{
                        return item
                    }
                })
            }
        }
        
        case 'TOGGLE_BASKET' :{
            return{
                ...state,
                isShow : !state.isShow
            }
        }
        case 'REMOVE_FROM_BASKET' :{
            toast.error("Removed item !")
            return{
                ...state,
                order :state.order.filter((item)=>{
                    return item.id !== payload.id   // biz bosgan o'yinchoqdan boshqa hammasini yangiOrderga qaytarib beradi
                   })
            }
        }
        // case "HANDLE_BACK_SHOW":{
        //     let toggle = null
        //     if(payload.target.getAttribute("data-close") === ""){
        //          toggle = state.isShow
        //     }
        //     return{
        //         ...state,
        //         isShow : !toggle
        //     }   
        // }
        case "SET_GOODS":
        return{
            ...state,
            goods : payload || [],  // agar hatolik bo'lib bizning massiv o'rniga boshqa narsa kelsa , goods = [] bo'ladi
            loading : false,
        }
        
        default: 
            return state
    }
}