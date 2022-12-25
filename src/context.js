import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext()

const initialState = {
    goods : [],
    loading :true,
    order: [],
    isShow : false
   }

export const ContextProvider = ({children})=>{



    const [value, dispatch] = useReducer(reducer, initialState)

    value.addtoBacket = (item)=>{
        dispatch({type : 'ADD_TO_BASKET', payload : item})
    }  
    value.incrementQuantity = (itemID)=>{
        dispatch({type: 'INCREMENT_QUANTITY', payload : {id: itemID}})
    } 

    value.decrementQuantity = (itemID)=>{
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id : itemID}})
    }
    value.handleisShow = ()=>{
        dispatch({type: "TOGGLE_BASKET"})
    }
    value.removeFromBasket = (itemID)=>{
        dispatch({type:"REMOVE_FROM_BASKET", payload : {id: itemID}})
    }
    value.handleBackShow = (e)=>{
        dispatch({type: 'HANDLE_BACK_SHOW', payload : e})
    }
    value.setGoods = (data)=>{
        dispatch({type: "SET_GOODS", payload :data})
    }
    return(
        <ShopContext.Provider value={value}>
            {children} 
        </ShopContext.Provider>
    )
}